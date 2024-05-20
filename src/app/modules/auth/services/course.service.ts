import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model'; // Ensure the path matches where your model is defined

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  // Retrieve a course by its ID
// In your CourseService
getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }
  

  // Update course data (excluding files)
  updateCourse(id: number, courseData: Course): Observable<Course> {
    return this.http.put<Course>(`/api/courses/${id}`, courseData);
  }

  // New method to update course including video and PDF files
  updateCourseWithFiles(courseId: number, formData: FormData): Observable<any> {
    return this.http.put(`/api/courses/${courseId}/upload-files`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  
}
