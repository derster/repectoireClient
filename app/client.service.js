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
var client_1 = require('./client');
var ClientService = (function () {
    function ClientService(router) {
        this.router = router;
        this.clients = clients_1.CLIENTS;
    }
    ClientService.prototype.getClients = function () {
        return Promise.resolve(clients_1.CLIENTS);
    };
    ClientService.prototype.ajouterAListeClients = function (nom, prenom, email) {
        var id = this.clients.length + 1;
        var nouveauClient = new client_1.Client(id, nom, prenom, email, false);
        this.clients.push(nouveauClient);
    };
    ClientService.prototype.voirClientDetails = function (client, id) {
        var lien = ['/details', id];
        this.router.navigate(lien);
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map