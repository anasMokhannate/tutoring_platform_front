import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './settings/settings.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'take-quiz/:id', 
      component: TakeQuizComponent },
      {
        path: 'overview/:id',
        component: OverviewComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}