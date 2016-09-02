"use strict";
// Imports
var team4talent_route_1 = require('./team4talent/team4talent.route');
var person_route_1 = require('./person/person.route');
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    }
].concat(team4talent_route_1.Team4TalentRoutes, person_route_1.PersonRoutes);
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map