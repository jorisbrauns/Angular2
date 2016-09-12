import { provideRouter, RouterConfig }    from '@angular/router';
import { PersonListComponent }            from './person-list.component';
import { PersonDetailComponent }          from './person-detail.component';

// Route Configuration
export const PersonRoutes: RouterConfig = [
    { path: 'persons', component: PersonListComponent },
    { path: 'person/create', component: PersonDetailComponent },
    { path: 'detail/:id', component: PersonDetailComponent }
];