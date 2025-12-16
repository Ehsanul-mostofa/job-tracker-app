import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
  onView(job: Job) {
  console.log('View clicked:', job);
  }
  downloadExcel(): void {
  const data = this.jobs.map(job => ({
    Company: job.company,
    Role: job.role,
    Status: job.status,
    AppliedDate: job.appliedDate,
    JobURL: job.jobLink
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { Jobs: worksheet }, SheetNames: ['Jobs'] };
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  const blob = new Blob(
    [excelBuffer],
    { type: 'application/octet-stream' }
  );

  saveAs(blob, 'Job-Tracker.xlsx');
}
}
