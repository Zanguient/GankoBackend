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
    BovinoService.prototype.findBovinos = function (idUsuario, idFinca) {
        return this.query("SELECT * FROM " + table + " WHERE finca = ? AND usuario = ?", [idFinca, idUsuario]);
    };
    //permite encontrar un bovino por medio de su identificador asignado
    BovinoService.prototype.findByIdBovino = function (idbovino) {
        return this.query("SELECT * FROM " + table + " WHERE id_bovino = ?", [idbovino]);
    };
    //permite buscar el bovino por id de BD
    BovinoService.prototype.findById = function (idbovino) {
        return this.query("SELECT * FROM " + table + " WHERE id = ?", [idbovino]);
    };
    //permite insertar un nuevo bovino
    BovinoService.prototype.addBovino = function (bovino) {
        return this.query("INSERT INTO " + table + " SET ?", [bovino]);
    };
    //permite editar un bovino
    BovinoService.prototype.updateBovino = function (bovino) {
        return this.query("UPDATE " + table + " SET ? ", [bovino]);
    };
    //permite subir la foto del bovino
    BovinoService.prototype.updateImageBovino = function (id, idImage) {
        return this.query("UPDATE " + table + " SET imagen = ? WHERE id = ?", [idImage, id]);
    };
    //permite eliminar un bovino usando su identificador asignado
    BovinoService.prototype.deleteBovino = function (idbovino) {
        return this.query("DELETE FROM " + table + " WHERE id_bovino = ?", [idbovino]);
    };
    return BovinoService;
}(database_service_1.DatabaseService));
exports.BovinoService = BovinoService;
var Bovino = /** @class */ (function () {
    function Bovino(id_bovino, imagen, name, fecha_ingreso, genero, proposito, peso, color, raza, id_Madre, id_Padre, lote, salida_por, numero_partos, parto_fallo, fecha_salida, precio_compra, precio_venta, finca, usuario, version) {
        this.id_bovino = id_bovino;
        this.imagen = imagen;
        this.name = name;
        this.fecha_ingreso = fecha_ingreso;
        this.genero = genero;
        this.proposito = proposito;
        this.peso = peso;
        this.color = color;
        this.raza = raza;
        this.id_Madre = id_Madre;
        this.id_Padre = id_Padre;
        this.lote = lote;
        this.salida_por = salida_por;
        this.numero_partos = numero_partos;
        this.parto_fallo = parto_fallo;
        this.fecha_salida = fecha_salida;
        this.precio_compra = precio_compra;
        this.precio_venta = precio_venta;
        this.finca = finca;
        this.usuario = usuario;
        this.version = version;
    }
    return Bovino;
}());
exports.Bovino = Bovino;
exports.bovinoService = new BovinoService();
//# sourceMappingURL=bovino-service.js.map