// Imports
import { provideRouter, RouterConfig } from '@angular/router';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { DashboardRoutes } from './dashboard.component/dashboard.route';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
//  { path: 'dashboard', component: DashboardComponent },
  ...DashboardRoutes,
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];