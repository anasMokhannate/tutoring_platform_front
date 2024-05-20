import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { ListsComponent } from './modules/widgets-examples/lists/lists.component';
import { OverviewComponent } from './modules/account/overview/overview.component';
import { AddCourseComponent } from './modules/widgets-examples/add-course/add-course.component';
import { TakeQuizComponent } from './modules/account/take-quiz/take-quiz.component';
import { CourseEditComponent } from './modules/widgets-examples/course-edit/course-edit.component';
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'course-edit/:id', 
  component: CourseEditComponent },
// Redirect to login page by default
  { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] }, // Protect the lists route
  { path: 'account/overview/:id', component: OverviewComponent, canActivate: [AuthGuard] }, // Protect the overview route
  { path: 'add-course', component: AddCourseComponent },
  { path: 'take-quiz/:id', component: TakeQuizComponent },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
