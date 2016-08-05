// Imports
import { provideRouter, RouterConfig } from '@angular/router';
import { CatListComponent } from '../cat.component/cat-list.component';
import { DogListComponent } from '../dog.component/dog-list.component';
import { DogRoutes }    from '../dog.component/dog.routes';
import { CatRoutes }    from '../cat.component/cat.routes';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  },
  // { path: 'cats', component: CatListComponent },
  // { path: 'dogs', component: DogListComponent }
  ...DogRoutes,
  ...CatRoutes
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];