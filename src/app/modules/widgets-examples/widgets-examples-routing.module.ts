import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { ListsComponent } from './lists/lists.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsExamplesComponent } from './widgets-examples.component';
import { MeetingRequestsComponent } from './meeting-requests/meeting-requests.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsExamplesComponent,
    children: [
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
