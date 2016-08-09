// Imports
import { provideRouter, RouterConfig } from '@angular/router';
import { CatListComponent } from './cat.component/cat-list.component';
import { DogListComponent } from './dog.component/dog-list.component';
import { DogRoutes }    from './dog.component/dog.routes';
import { CatRoutes }    from './cat.component/cat.routes';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { DashboardComponent } from './dashboard.component/dashboard.component';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // { path: 'cats', component: CatListComponent },
 { path: 'dashboard', component: DashboardComponent },
  ...DogRoutes,
  ...CatRoutes
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];