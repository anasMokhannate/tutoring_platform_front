import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WidgetsExamplesRoutingModule } from './widgets-examples-routing.module';
import { WidgetsExamplesComponent } from './widgets-examples.component';
import { ListsComponent } from './lists/lists.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsModule } from '../../_metronic/partials';
import { PsychologistDashboardComponent } from './psychologist-dashboard/psychologist-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseEditComponent } from './course-edit/course-edit.component';

@NgModule({
  declarations: [
    WidgetsExamplesComponent,
    ListsComponent,
    StatisticsComponent,
    ChartsComponent,
    InstructorDashboardComponent,
    TablesComponent,
    PsychologistDashboardComponent,
    AddCourseComponent,
    CourseEditComponent
    
  ],
  imports: [CommonModule, WidgetsExamplesRoutingModule, WidgetsModule,ReactiveFormsModule,RouterModule],
  exports: [
    CourseEditComponent  // Ensure it's exported if it needs to be used outside this module
  ]
})
export class WidgetsExamplesModule {}
