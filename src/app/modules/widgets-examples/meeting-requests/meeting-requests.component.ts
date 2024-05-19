import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-requests',
  templateUrl: './meeting-requests.component.html',
  styleUrls: ['./meeting-requests.component.scss']
})
export class MeetingRequestsComponent implements OnInit {
  psychologists: any[] = [
    { id: '1', name: 'Dr. Jane Doe' },
    { id: '2', name: 'Dr. John Smith' }
  ]; // Static data for psychologists
  courses: any[] = [
    { id: '101', title: 'Introduction to Psychology' },
    { id: '102', title: 'Advanced Neuroscience' }
  ]; // Static data for courses
  psychologistForm: FormGroup;
  courseSessionForm: FormGroup;
  demands: any[] = [
    { id: 1, requestType: 'Psychologist Support', description: 'Needs consultation', status: 'Pending' },
    { id: 2, requestType: 'Course Session', description: 'Enroll in course', status: 'Approved' }
  ]; 
  showTable: boolean = false;  // Variable to toggle the visibility of the demands table

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.psychologistForm = this.fb.group({
      psychologist: ['', Validators.required],
      student: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.courseSessionForm = this.fb.group({
      course: ['', Validators.required],
      instructor: ['', Validators.required],
      sessionDetails: ['', Validators.required]
    });
  }

  submitPsychologistRequest() {
    if (this.psychologistForm.valid) {
      console.log('Submitting psychologist request:', this.psychologistForm.value);
    }
  }

  submitCourseSessionRequest() {
    if (this.courseSessionForm.valid) {
      console.log('Submitting course session request:', this.courseSessionForm.value);
    }
  }

  toggleTable() {
    this.showTable = !this.showTable;
  }
}

