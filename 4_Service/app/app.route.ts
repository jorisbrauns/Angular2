import { Routes, RouterModule } 	from '@angular/router';
import { OwicRoutes } 				from './owic/owic.route';
import { PersonRoutes } 			from './person/person.route';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
  ...PersonRoutes,
  ...OwicRoutes
];

export const RoutingModule = RouterModule.forRoot(appRoutes);