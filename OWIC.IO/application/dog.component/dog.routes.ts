import { provideRouter, RouterConfig } from '@angular/router';
import { DogListComponent }    from './dog-list.component';
import { DogDetailsComponent }    from './dog-details.component';
import { PetAdminComponent } from '../pet.component/pet-admin.component';
import { AuthGuard } from '../security/auth.guard';

// Route Configuration
export const DogRoutes: RouterConfig = [
  { path: 'dogs', component: DogListComponent },
  { path: 'dogs/:id', component: DogDetailsComponent },
  {
    path: 'admin',
    component: PetAdminComponent,
    canActivate: [AuthGuard]
  }
];