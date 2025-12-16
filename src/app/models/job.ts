export interface Job {
  next(updated: any): unknown;
  value: any;
  id: string;
  company: string;
  role: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate: string;
  jobLink: string;
  notes?: string;
}

