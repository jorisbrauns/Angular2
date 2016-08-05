import { provideRouter, RouterConfig } from '@angular/router';
import { CatListComponent }    from './cat-list.component';
import { CatDetailsComponent }    from './cat-details.component';

// Route Configuration
export const CatRoutes: RouterConfig = [
  { path: 'cats', component: CatListComponent },
  { path: 'cats/:id', component: CatDetailsComponent }
];