import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ListsComponent } from './lists/lists.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsExamplesComponent } from './widgets-examples.component';
import { MeetingRequestsComponent } from './meeting-requests/meeting-requests.component';
import { PsychologistDashboardComponent } from './psychologist-dashboard/psychologist-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsExamplesComponent,
    children: [
      { path: 'course-edit/:id', component: CourseEditComponent },

      {
        path: 'add-course',
        component: AddCourseComponent,
      },
      {
        path: 'instructor-dashboard',
        component: InstructorDashboardComponent,
      },
      {
        path: 'psychologist-dashboard',
        component: PsychologistDashboardComponent,
      },
      {
        path: 'meeting-requests',
        component: MeetingRequestsComponent,
      },
      {
        path: 'lists',
        component: ListsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      
      {
        path: 'tables',
        component: TablesComponent,
      },
    
      { path: '', redirectTo: 'lists', pathMatch: 'full' },
      { path: '**', redirectTo: 'lists', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class WidgetsExamplesRoutingModule {}
