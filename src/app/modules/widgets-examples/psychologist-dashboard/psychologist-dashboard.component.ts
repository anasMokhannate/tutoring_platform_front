import { Component, OnInit } from '@angular/core';
import { Request } from '../meeting-requests/models/request.model'; // Ensure the correct path

@Component({
  selector: 'app-psychologist-dashboard',
  templateUrl: './psychologist-dashboard.component.html',
  styleUrls: ['./psychologist-dashboard.component.scss']
})
export class PsychologistDashboardComponent implements OnInit {
  psychologistRequests: Request[] = [];

  ngOnInit(): void {
    this.loadPsychologistRequests();
  }

  loadPsychologistRequests() {
    // Here, update 'type' to 'requestType' to match the model's property
    this.psychologistRequests = [
      { id: 1, studentName: 'John Doe', requestType: 'Psychologist Support', description: 'Needs consultation', status: 'Pending' },
      { id: 2, studentName: 'Jane Smith', requestType: 'Psychologist Support', description: 'Follow-up session', status: 'Pending' }
    ];
  }

  acceptRequest(request: Request) {
    request.status = 'Accepted';
    // Implement logic to update the backend via a service
  }

  denyRequest(request: Request) {
    request.status = 'Denied';
    // Implement logic to update the backend via a service
  }
}
