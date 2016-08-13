"use strict";
// ====== ./app/main.ts ======
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
// Import Layout Component to be bootstrapped
var application_component_1 = require('./application.component');
// Import configured routes
var application_routes_1 = require('./application.routes');
platform_browser_dynamic_1.bootstrap(application_component_1.ApplicationComponent, [
    application_routes_1.APP_ROUTER_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map