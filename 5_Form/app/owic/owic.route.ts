import { provideRouter, RouterConfig }   from '@angular/router';
import { OwicPageComponent }          	 from './owic.component';

export const OwicRoutes: RouterConfig = [
    { path: 'about', component: OwicPageComponent }
];