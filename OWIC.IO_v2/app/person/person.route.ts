import { provideRouter, RouterConfig } from '@angular/router';
import { PersonComponent }          from './person.component';

// Route Configuration
export const PersonRoutes: RouterConfig = [
  { path: 'person', component: PersonComponent },
];