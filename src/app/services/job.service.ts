import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../models/job';

@Injectable({ providedIn: 'root' })
export class JobService {

  private jobs$ = new BehaviorSubject<Job[]>(this.load());

  getJobs() {
    return this.jobs$.asObservable();
  }

  // FOR REMOVING LOCAL STORAGE DURING TESTING
  // constructor() {
  // localStorage.removeItem('jobs'); // TEMP
  // this.jobs$ = new BehaviorSubject<Job[]>(this.load());
  // }

  addJob(job: Job) {
    const updated = [...this.jobs$.value, job];
    this.jobs$.next(updated);
    localStorage.setItem('jobs', JSON.stringify(updated));
  }

  getById(id: string): Job | undefined {
    return this.jobs$.value.find(j => j.id === id);
  }

  deleteJob(id: string): void {
    const updated = this.jobs$.value.filter(job => job.id !== id);
    this.jobs$.next(updated);
    localStorage.setItem('jobs', JSON.stringify(updated));
  }

  getAllJobs(): Job[] {
  return this.jobs$.value;
  }


  private load(): Job[] {
    return JSON.parse(localStorage.getItem('jobs') || '[]');
  }
}
