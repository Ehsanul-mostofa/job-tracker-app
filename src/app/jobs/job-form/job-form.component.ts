import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent {
job: Job = {
  id: '',
  company: '',
  role: '',
  status: 'Applied',
  appliedDate: new Date().toISOString().split('T')[0],
  notes: '',
  jobLink: '',
  next: function (updated: any): unknown {
    throw new Error('Function not implemented.');
  },
  value: undefined
};


  constructor(private jobService: JobService) {}

submit() {
  this.jobService.addJob({
    ...this.job,
    id: Date.now().toString()
  });
  this.reset();
}


  reset() {
    this.job.company = '';
    this.job.role = '';
    this.job.notes = '';
  }
}
