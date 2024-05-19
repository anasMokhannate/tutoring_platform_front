import { Component, OnInit } from '@angular/core';
import { Request } from '../meeting-requests/models/request.model'; // Ensure correct path

@Component({
    selector: 'app-instructor-dashboard',
    templateUrl: './instructor-dashboard.component.html'
})
export class InstructorDashboardComponent implements OnInit {
    courseRequests: Request[] = [
        { id: 1, studentName: 'Alice Johnson', requestType: 'Advanced Mathematics', description: 'Need advanced course for final year students', status: 'Pending' },
        { id: 2, studentName: 'Bob Smith', requestType: 'Basic Physics', description: 'Introductory course to cover all fundamental concepts', status: 'Pending' }
      ];

    constructor() { }

    ngOnInit(): void {
    }

    acceptRequest(request: Request) {
      request.status = 'Accepted';
      // Implement backend update logic
    }

    denyRequest(request: Request) {
      request.status = 'Denied';
      // Implement backend update logic
    }
}
