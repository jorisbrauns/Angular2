"use strict";
// Imports
var router_1 = require('@angular/router');
var dashboard_route_1 = require('./dashboard.component/dashboard.route');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
].concat(dashboard_route_1.DashboardRoutes);
// Export routes
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map