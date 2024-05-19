// course-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../modules/auth/services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  editCourseForm: FormGroup;
  courseId: number;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.params['id'];
    this.loadCourseDetails();
    this.editCourseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      videoUrl: ['', Validators.required],
      pdfUrl: ['', Validators.required]
    });
  }

  loadCourseDetails() {
    this.courseService.getCourseById(this.courseId).subscribe(course => {
      this.editCourseForm.patchValue(course);
    });
  }

  submitEdit() {
    if (this.editCourseForm.valid) {
      const updatedCourse = {...this.editCourseForm.value, lastModified: new Date()};
      this.courseService.updateCourse(this.courseId, updatedCourse).subscribe({
        next: () => this.router.navigate(['/instructor-dashboard']),
        error: err => console.error('Error updating course:', err)
      });
    }
  }
}
