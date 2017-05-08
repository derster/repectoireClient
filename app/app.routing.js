"use strict";
var router_1 = require('@angular/router');
var app_formulaire_clients_component_1 = require('./app.formulaire-clients.component');
var app_details_clients_component_1 = require('./app.details-clients.component');
var app_clients_component_1 = require('./app.clients.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: app_clients_component_1.AppClientsComponent
    },
    {
        path: 'ajouterClient',
        component: app_formulaire_clients_component_1.AppFormulaireClientsComponent
    },
    {
        path: 'details/:id',
        component: app_details_clients_component_1.AppDetailsClientsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map