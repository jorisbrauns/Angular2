// ====== ./app/main.ts ======
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

// Import Layout Component to be bootstrapped
import { ApplicationComponent } from './application.component';

// Import configured routes
import { APP_ROUTER_PROVIDERS } from './application.routes';

bootstrap(ApplicationComponent, [
    APP_ROUTER_PROVIDERS,  disableDeprecatedForms(), provideForms()
])
.catch(err => console.error(err));
