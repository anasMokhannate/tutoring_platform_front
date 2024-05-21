import { Component, OnInit } from '@angular/core';
import { Request } from '../meeting-requests/models/request.model'; // Ensure correct path

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss']
})

export class InstructorDashboardComponent implements OnInit {
    courseRequests: Request[] = [
        { id: 1, studentName: 'Alice Johnson', requestType: 'Advanced Mathematics', description: 'Need advanced course for final year students', status: 'Pending' },
        { id: 2, studentName: 'Bob Smith', requestType: 'Basic Physics', description: 'Introductory course to cover all fundamental concepts', status: 'Pending' },
        { id: 3, studentName: 'Carol Lee', requestType: 'Literature', description: 'Explore classic and modern literature', status: 'Pending' },
        { id: 4, studentName: 'Dave Brown', requestType: 'Environmental Science', description: 'Course focusing on sustainable practices', status: 'Approved' },
        { id: 5, studentName: 'Eva Green', requestType: 'History of Art', description: 'Understanding art from different cultures', status: 'Denied' },
        { id: 6, studentName: 'Frank Hale', requestType: 'Computer Science', description: 'Data structures and algorithms', status: 'Approved' },
        { id: 7, studentName: 'Grace Ford', requestType: 'Business Management', description: 'Management skills for upcoming leaders', status: 'Pending' },
        { id: 8, studentName: 'Henry Gale', requestType: 'Psychology', description: 'Psychological techniques in modern therapy', status: 'Pending' }
      ];

    constructor() { }

    ngOnInit(): void {
    }

    acceptRequest(request: Request) {
        // Implement backend update logic here
        request.status = 'Accepted';
    }

    denyRequest(request: Request) {
        // Implement backend update logic here
        request.status = 'Denied';
    }
}
