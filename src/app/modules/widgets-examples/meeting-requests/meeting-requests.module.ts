// src/app/modules/widgets-examples/meeting-requests/meeting-requests.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // For Reactive Forms
import { MatTabsModule } from '@angular/material/tabs';  // For Angular Material Tabs
import { MeetingRequestsComponent } from './meeting-requests.component';

@NgModule({
  declarations: [MeetingRequestsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Make sure ReactiveFormsModule is included
    MatTabsModule // Make sure MatTabsModule is included
  ]
})
export class MeetingRequestsModule { }
