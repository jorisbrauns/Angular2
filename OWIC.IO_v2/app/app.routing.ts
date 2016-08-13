// Imports
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { DashboardRoutes } from './dashboard/dashboard.route';
import { PersonRoutes } from './person/person.route';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...PersonRoutes
];

export const Routing = RouterModule.forRoot(appRoutes);