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
    this.psychologistRequests = [
      { id: 1, studentName: 'John Doe', requestType: 'Initial Consultation', description: 'Expressed anxiety issues', status: 'Pending' },
      { id: 2, studentName: 'Jane Smith', requestType: 'Follow-up', description: 'Reviewing treatment progress', status: 'Accepted' },
      { id: 3, studentName: 'Emily Johnson', requestType: 'Crisis Intervention', description: 'Immediate support needed', status: 'Pending' },
      { id: 4, studentName: 'Michael Brown', requestType: 'Therapy Session', description: 'Scheduled cognitive behavioral therapy', status: 'Accepted' }, // Changed from 'Completed' to 'Accepted'
      { id: 5, studentName: 'Isabella Garcia', requestType: 'Group Therapy', description: 'Peer group discussion', status: 'Pending' }, // Changed from 'Scheduled' to 'Pending'
      { id: 6, studentName: 'William Martinez', requestType: 'Psychological Assessment', description: 'Initial psychological evaluation', status: 'Pending' },
      { id: 7, studentName: 'Sophia Wilson', requestType: 'Emergency Support', description: 'Urgent response for emotional distress', status: 'Denied' } // Assuming 'Denied' is appropriate here
    ];
  }
  

  acceptRequest(request: Request) {
    request.status = 'Accepted';
    // Here, add logic to interact with the service for updating the backend.
  }

  denyRequest(request: Request) {
    request.status = 'Denied';
    // Here, implement the logic to interact with the service for updating the backend.
  }

  cancelRequest(request: Request) {
    request.status = 'Cancelled';
    // Optionally add a function to handle cancellation of requests.
  }
}
