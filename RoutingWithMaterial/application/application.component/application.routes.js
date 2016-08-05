"use strict";
// Imports
var router_1 = require('@angular/router');
var dog_routes_1 = require('../dog.component/dog.routes');
var cat_routes_1 = require('../cat.component/cat.routes');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/dogs',
        pathMatch: 'full'
    }
].concat(dog_routes_1.DogRoutes, cat_routes_1.CatRoutes);
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=application.routes.js.map