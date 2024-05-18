import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor() {
    this.profile = {
      name: 'John Doe',
      role: 'Student', // Can be Student, Teacher, Parent, or Psychologist
      email: 'john.doe@example.com',
      phone: '+1234567890',
      studentId: 'S12345', // Specific field for Student
      class: '10th Grade', // Specific field for Student
      subjects: ['Math', 'Science'], // Specific field for Teacher
      children: ['Child 1', 'Child 2'], // Specific field for Parent
      specialty: 'Child Psychology' // Specific field for Psychologist
    };
  }

  ngOnInit(): void {}
}
