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
var table = "finca";
var FincaService = /** @class */ (function (_super) {
    __extends(FincaService, _super);
    function FincaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //permite recuperar las fincas pertenecientes a un usuario
    FincaService.prototype.findFincas = function (id) {
        return this.query("SELECT * FROM " + table + " WHERE usuario = ?", [id]);
    };
    return FincaService;
}(database_service_1.DatabaseService));
exports.FincaService = FincaService;
var Finca = /** @class */ (function () {
    function Finca(name, location, size, user) {
        this.name = name;
        this.location = location;
        this.size = size;
        this.user = user;
    }
    return Finca;
}());
exports.Finca = Finca;
exports.fincaService = new FincaService();
//# sourceMappingURL=finca-service.js.map