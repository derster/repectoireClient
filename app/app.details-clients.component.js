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
var router_1 = require('@angular/router');
var AppDetailsClientsComponent = (function () {
    function AppDetailsClientsComponent(router, route) {
        this.router = router;
        this.route = route;
        this.clients = clients_1.CLIENTS;
        this.edit = false;
        this.texteBouton = "Modifier";
    }
    AppDetailsClientsComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.client = this.clients[id];
        console.log(this.clients[id]);
    };
    AppDetailsClientsComponent.prototype.modifierClient = function () {
        this.edit = (this.edit == false ? true : false);
        this.texteBouton = (this.edit == false ? "Modifier" : "Sauvegarder");
        return false;
    };
    AppDetailsClientsComponent.prototype.supprimerClient = function (index) {
        this.clients.splice(index - 1, 1);
        this.router.navigate(['/accueil']);
        return false;
    };
    AppDetailsClientsComponent = __decorate([
        core_1.Component({
            selector: 'client-details',
            templateUrl: 'app/app.details-clients.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], AppDetailsClientsComponent);
    return AppDetailsClientsComponent;
}());
exports.AppDetailsClientsComponent = AppDetailsClientsComponent;
//# sourceMappingURL=app.details-clients.component.js.map