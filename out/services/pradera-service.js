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
var table = "pradera";
var PraderaService = /** @class */ (function (_super) {
    __extends(PraderaService, _super);
    function PraderaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PraderaService.prototype.insertPradera = function (pradera) {
        this.query("INSERT INTO " + table + " SET ?", [pradera]);
    };
    PraderaService.prototype.getPraderas = function (id_finca) {
        this.query("SELECT * FROM " + table + " WHERE finca = ?", [id_finca]);
    };
    PraderaService.prototype.getPradera = function (id_pradera) {
        this.query("SELECT * FROM " + table + " WHERE id = ?", [id_pradera]);
    };
    PraderaService.prototype.deletePradera = function (id_pradera) {
        this.query("DELETE FROM " + table + " WHERE id = ?", [id_pradera]);
    };
    PraderaService.prototype.updatePradera = function (id_pradera, pradera) {
        this.query("UPDATE " + table + " SET ? WHERE id = ?", [pradera, id_pradera]);
    };
    return PraderaService;
}(database_service_1.DatabaseService));
exports.PraderaService = PraderaService;
var Pradera = /** @class */ (function () {
    function Pradera() {
    }
    return Pradera;
}());
exports.Pradera = Pradera;
//# sourceMappingURL=pradera-service.js.map