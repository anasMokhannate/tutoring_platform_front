import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      
      
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
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
export class ProfileRoutingModule {}
