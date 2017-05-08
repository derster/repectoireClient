"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var clients_1 = require('./clients');
var client_service_1 = require('./client.service');
var AppFormulaireClientsComponent = (function () {
    function AppFormulaireClientsComponent(router, clientService) {
        this.router = router;
        this.clientService = clientService;
        this.clients = clients_1.CLIENTS;
    }
    AppFormulaireClientsComponent.prototype.ajouterClient = function (nom, prenom, email) {
        this.clientService.ajouterAListeClients(nom, prenom, email);
        this.router.navigate(['/accueil']);
    };
    AppFormulaireClientsComponent = __decorate([
        core_1.Component({
            selector: 'formulaire-clients',
            templateUrl: 'app/app.formulaire-clients.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, client_service_1.ClientService])
    ], AppFormulaireClientsComponent);
    return AppFormulaireClientsComponent;
}());
exports.AppFormulaireClientsComponent = AppFormulaireClientsComponent;
//# sourceMappingURL=app.formulaire-clients.component.js.map