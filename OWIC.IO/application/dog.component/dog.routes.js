"use strict";
var dog_list_component_1 = require('./dog-list.component');
var dog_details_component_1 = require('./dog-details.component');
var pet_admin_component_1 = require('../pet.component/pet-admin.component');
var auth_guard_1 = require('../security/auth.guard');
// Route Configuration
exports.DogRoutes = [
    { path: 'dogs', component: dog_list_component_1.DogListComponent },
    { path: 'dogs/:id', component: dog_details_component_1.DogDetailsComponent },
    {
        path: 'admin',
        component: pet_admin_component_1.PetAdminComponent,
        canActivate: [auth_guard_1.AuthGuard]
    }
];
//# sourceMappingURL=dog.routes.js.map