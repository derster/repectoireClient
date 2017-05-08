"use strict";
var Client = (function () {
    function Client(id, nom, prenom, email, actif) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.actif = actif;
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map