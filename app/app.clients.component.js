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
var client_service_1 = require('./client.service');
var AppClientsComponent = (function () {
    function AppClientsComponent(clientService) {
        this.clientService = clientService;
    }
    AppClientsComponent.prototype.afficherClients = function () {
        var _this = this;
        this.clientService.getClients().then(function (clients) { return _this.clients = clients; });
    };
    AppClientsComponent.prototype.voirDetails = function (client, id) {
        this.clientService.voirClientDetails(client, id);
    };
    AppClientsComponent.prototype.ngOnInit = function () {
        this.afficherClients();
    };
    AppClientsComponent = __decorate([
        core_1.Component({
            selector: "liste-clients",
            templateUrl: 'app/app.clients.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService])
    ], AppClientsComponent);
    return AppClientsComponent;
}());
exports.AppClientsComponent = AppClientsComponent;
//# sourceMappingURL=app.clients.component.js.map