"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var database_service_1 = require("./database-service");
require("rxjs/add/operator/mergeMap");
var table = "bovino";
var BovinoService = /** @class */ (function (_super) {
    __extends(BovinoService, _super);
    function BovinoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //permite recuperar los bovinos pertenecientes a un usuario o finca
    BovinoService.prototype.findBovinos = function (id_finca) {
        return this.query("SELECT * FROM " + table + " WHERE finca = ?", [id_finca]);
    };
    return BovinoService;
}(database_service_1.DatabaseService));
exports.BovinoService = BovinoService;
var Bovino = /** @class */ (function () {
    function Bovino(name, location, size, user) {
        this.name = name;
        this.location = location;
        this.size = size;
        this.user = user;
    }
    return Bovino;
}());
exports.Bovino = Bovino;
exports.bovinoService = new BovinoService();
//# sourceMappingURL=bovino-service.js.map