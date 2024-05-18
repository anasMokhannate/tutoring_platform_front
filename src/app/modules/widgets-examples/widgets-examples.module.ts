import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsExamplesRoutingModule } from './widgets-examples-routing.module';
import { WidgetsExamplesComponent } from './widgets-examples.component';
import { ListsComponent } from './lists/lists.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetsModule } from '../../_metronic/partials';
import { PsychologistDashboardComponent } from './psychologist-dashboard/psychologist-dashboard.component';

@NgModule({
  declarations: [
    WidgetsExamplesComponent,
    ListsComponent,
    StatisticsComponent,
    ChartsComponent,
    
    TablesComponent,
          PsychologistDashboardComponent,
    
  ],
  imports: [CommonModule, WidgetsExamplesRoutingModule, WidgetsModule],
})
export class WidgetsExamplesModule {}
