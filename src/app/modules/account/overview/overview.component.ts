import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../auth/models/course.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  course: Course | undefined;

  courses: Course[] = [
    {
      id: 1,
      name: 'Advanced Calculus',
      description: 'An advanced course on differential and integral calculus, focusing on multi-variable functions and vector calculus.',
      type: 'Mathematics',
      professor: 'Prof. Alan Turing',
      videoUrl: 'https://example.com/videos/advanced_calculus.mp4',
      pdfUrl: 'https://example.com/pdfs/advanced_calculus.pdf',
    },
    {
      id: 2,
      name: 'Quantum Mechanics',
      description: 'Fundamentals of quantum mechanics, including wave functions, the Schrödinger equation, and quantum state evolution.',
      type: 'Physics',
      professor: 'Prof. Niels Bohr',
      videoUrl: 'https://example.com/videos/quantum_mechanics.mp4',
      pdfUrl: 'https://example.com/pdfs/quantum_mechanics.pdf',
    },
    {
      id: 3,
      name: 'Organic Chemistry: Structures and Reactions',
      description: 'In-depth study of the structure, properties, and reactions of organic molecules, including reaction mechanisms.',
      type: 'Chemistry',
      professor: 'Prof. Marie Curie',
      videoUrl: 'https://example.com/videos/organic_chemistry.mp4',
      pdfUrl: 'https://example.com/pdfs/organic_chemistry.pdf',
    },
    {
      id: 4,
      name: 'Molecular Biology',
      description: 'Introduction to molecular biology, focusing on the molecular mechanisms of DNA replication, transcription, and translation.',
      type: 'Biology',
      professor: 'Prof. Rosalind Franklin',
      videoUrl: 'https://example.com/videos/molecular_biology.mp4',
      pdfUrl: 'https://example.com/pdfs/molecular_biology.pdf',
    },
    {
      id: 5,
      name: 'Data Structures and Algorithms',
      description: 'Comprehensive overview of data structures and algorithms, including sorting, searching, and algorithmic efficiency.',
      type: 'Computer Science',
      professor: 'Prof. Donald Knuth',
      videoUrl: 'https://example.com/videos/data_structures.mp4',
      pdfUrl: 'https://example.com/pdfs/data_structures.pdf',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = +params['id'];
      this.course = this.courses.find(course => course.id === courseId);
    });
  }
}
