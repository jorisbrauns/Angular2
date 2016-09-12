"use strict";
var person_list_component_1 = require('./person-list.component');
var person_detail_component_1 = require('./person-detail.component');
// Route Configuration
exports.PersonRoutes = [
    { path: 'persons', component: person_list_component_1.PersonListComponent },
    { path: 'person/create', component: person_detail_component_1.PersonDetailComponent },
    { path: 'detail/:id', component: person_detail_component_1.PersonDetailComponent }
];
//# sourceMappingURL=person.route.js.map