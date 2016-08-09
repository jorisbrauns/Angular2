"use strict";
// Imports
var router_1 = require('@angular/router');
var dog_routes_1 = require('./dog.component/dog.routes');
var cat_routes_1 = require('./cat.component/cat.routes');
var dashboard_component_1 = require('./dashboard.component/dashboard.component');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    // { path: 'cats', component: CatListComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
].concat(dog_routes_1.DogRoutes, cat_routes_1.CatRoutes);
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=application.routes.js.map