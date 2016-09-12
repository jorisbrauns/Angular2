"use strict";
var router_1 = require('@angular/router');
var owic_route_1 = require('./owic/owic.route');
var person_route_1 = require('./person/person.route');
var appRoutes = [
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }
].concat(person_route_1.PersonRoutes, owic_route_1.OwicRoutes);
exports.RoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map