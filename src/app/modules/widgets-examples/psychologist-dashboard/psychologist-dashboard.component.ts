// src/app/modules/widgets-examples/psychologist-dashboard/psychologist-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Request } from '../meeting-requests/models/request.model';

@Component({
  selector: 'app-psychologist-dashboard',
  templateUrl: './psychologist-dashboard.component.html',
  styleUrls: ['./psychologist-dashboard.component.scss']
})
export class PsychologistDashboardComponent implements OnInit {
  requests: Request[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    // Mock data, replace with actual data fetching from a service
    this.requests = [
      { id: 1, studentName: 'John Doe', requestType: 'Psychologist Support', description: 'Needs consultation', status: 'Pending' },
      { id: 2, studentName: 'Jane Smith', requestType: 'Course Session', description: 'Enroll in course', status: 'Pending' }
    ];
  }

  acceptRequest(request: Request) {
    request.status = 'Accepted';
    // Call service to update the status in the backend
  }

  denyRequest(request: Request) {
    request.status = 'Denied';
    // Call service to update the status in the backend
  }
}
