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
var clients_1 = require('./clients');
var client_1 = require('./client');
var AppFormulaireClientsComponent = (function () {
    function AppFormulaireClientsComponent() {
        this.clients = clients_1.CLIENTS;
    }
    AppFormulaireClientsComponent.prototype.ajouterClient = function (nom, prenom, email) {
        var nouveauClient = new client_1.Client(nom, prenom, email, false);
        this.clients.push(nouveauClient);
    };
    AppFormulaireClientsComponent = __decorate([
        core_1.Component({
            selector: 'formulaire-clients',
            templateUrl: 'app/app.formulaire-clients.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppFormulaireClientsComponent);
    return AppFormulaireClientsComponent;
}());
exports.AppFormulaireClientsComponent = AppFormulaireClientsComponent;
//# sourceMappingURL=app.formulaire-clients.js.map