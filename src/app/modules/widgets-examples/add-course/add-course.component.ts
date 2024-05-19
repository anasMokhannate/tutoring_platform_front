import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    courseForm: FormGroup;
    selectedVideo: File | null = null;
    selectedPDF: File | null = null;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.courseForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required]
        });
    }

    onVideoSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files![0]!;
        if (file) {
            this.selectedVideo = file;
        }
    }

    onPDFSelected(event: Event): void {
        const file = (event.target as HTMLInputElement).files![0]!;
        if (file) {
            this.selectedPDF = file;
        }
    }

    submitCourse(): void {
        if (this.courseForm.valid) {
            const formData = new FormData();
            formData.append('name', this.courseForm.value.name);
            formData.append('description', this.courseForm.value.description);
            formData.append('category', this.courseForm.value.category);
            if (this.selectedVideo) {
                formData.append('video', this.selectedVideo);
            }
            if (this.selectedPDF) {
                formData.append('pdf', this.selectedPDF);
            }

            // Here, implement your service call to send formData to the server
            console.log('Course Data:', formData);
        }
    }
}
