import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job!: Job;
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.jobService.getById(id);
      if (found) {
        this.job = found;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  /* Safe URL handling */
  get safeJobLink(): string {
    if (!this.job?.jobLink) return '';
    return this.job.jobLink.startsWith('http')
      ? this.job.jobLink
      : 'https://' + this.job.jobLink;
  }

  /* Navigation */
  goBack(): void {
    this.router.navigate(['/']);
  }

  /* Delete flow */
  openDeleteConfirm(): void {
    this.showConfirm = true;
    console.log('Delete confirmation opened', this.showConfirm);
  }

  cancelDelete(): void {
    this.showConfirm = false;
  }

  confirmDelete(): void {
    this.jobService.deleteJob(this.job.id);
    console.log('ID', this.job.id);
    this.router.navigate(['/']);
  }
}
