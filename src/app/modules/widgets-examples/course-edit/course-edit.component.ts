import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../modules/auth/services/course.service'; // Correct path if necessary
import { Course } from '../../../modules/auth/models/course.model';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  editCourseForm: FormGroup;
  courseId: number;
  course: Course | undefined; // Using number if the ID in your API is a number

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {
    this.editCourseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      video: [null], // Handles file input for video
      pdf: [null]   // Handles file input for PDF
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     console.log('Course ID:', params['id']);
    this.loadCourseData(params['id']); // Convert param to a number
      // Load initial course details if necessary
    });
  }
  loadCourseData(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe({
      next: (courseData) => {
        this.course = courseData;
        this.editCourseForm.patchValue({
          name: courseData.name,
          description: courseData.description,
          type: courseData.type,
          // Assuming your form fields are named 'name', 'description', and 'type'
        });
      },
      error: (err) => {
        console.error('Failed to load course data:', err);
      }
    });
  }
  onFileSelect(event: any, field: string): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.editCourseForm.patchValue({
        [field]: files[0]
      });
    }
  }

  submitEdit(): void {
    if (this.editCourseForm.valid) {
      const formData = new FormData();
      formData.append('name', this.editCourseForm.value.name);
      formData.append('description', this.editCourseForm.value.description);
      formData.append('type', this.editCourseForm.value.type);
      if (this.editCourseForm.value.video) formData.append('video', this.editCourseForm.value.video);
      if (this.editCourseForm.value.pdf) formData.append('pdf', this.editCourseForm.value.pdf);

      this.courseService.updateCourseWithFiles(this.courseId, formData).subscribe({
        next: () => {
          this.router.navigate(['/course-management']);
          // Optionally show a success message
        },
        error: (error) => {
          console.error('Error updating course:', error);
          // Optionally show an error message
        }
      });
    }
  }
}
