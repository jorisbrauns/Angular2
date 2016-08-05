// ====== ./app/main.ts ======
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { JSONP_PROVIDERS } from '@angular/http';

// Import Layout Component to be bootstrapped
import { ApplicationComponent } from './application.component/application.component';

// Import configured routes
import { APP_ROUTER_PROVIDERS } from './application.component/application.routes';

bootstrap(ApplicationComponent, [
    APP_ROUTER_PROVIDERS, JSONP_PROVIDERS
])
.catch(err => console.error(err));