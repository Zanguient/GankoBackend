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
    //permite insertar un nuevo bovino
    BovinoService.prototype.addBovino = function (idBovino, imagen, name, fecha, genero, proposito, peso, color, raza, idmadre, idpadre, salida, lote, salidaPor, numeroPartos, partoFallo, fechaSalida, finca, usuario) {
        return this.query("INSERT INTO " + table + " (id_bovino,imagen,nombre,fecha,genero,proposito,peso,color,\n                raza,id_madre,id_padre,salida,lote,salida_por,numero_partos,parto_fallido,fecha_salida,finca,usuario) VALUES \n                (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
            idBovino, imagen, name, fecha, genero, proposito, peso, color, raza, idmadre, idpadre, salida, lote, salidaPor, numeroPartos,
            partoFallo, fechaSalida, finca, usuario
        ]);
    };
    //permite editar un bovino
    BovinoService.prototype.updateBovino = function (idBovino, imagen, name, fecha, genero, proposito, peso, color, raza, idmadre, idpadre, salida, lote, salidaPor, numeroPartos, partoFallo, fechaSalida, finca, usuario) {
        return this.query("UPDATE " + table + " SET imagen = ?, nombre = ?, fecha = ?, genero = ?,\n        proposito = ?, peso = ?, color = ?, raza = ?, id_madre = ?, id_padre = ?, salida = ?, lote = ?, salida_por = ?,\n        numero_partos = ?, parto_fallido = ?, fecha_salida = ?, finca = ?, usuario = ? WHERE id_bovino = ? ", [
            imagen, name, fecha, genero, proposito, peso, color, raza, idmadre, idpadre, salida, lote, salidaPor, numeroPartos,
            partoFallo, fechaSalida, finca, usuario, idBovino
        ]);
    };
    //permite eliminar un bovino usando su identificador asignado
    BovinoService.prototype.deleteBovino = function (idbovino) {
        return this.query("DELETE FROM " + table + " WHERE id_bovino = ?", [idbovino]);
    };
    return BovinoService;
}(database_service_1.DatabaseService));
exports.BovinoService = BovinoService;
var Bovino = /** @class */ (function () {
    function Bovino(idBovino, imagen, name, fecha, genero, proposito, peso, color, raza, idMadre, idPadre, salida, lote, salidaPor, numeroPartos, partoFallo, fechaSalida, finca, usuario) {
        this.idBovino = idBovino;
        this.imagen = imagen;
        this.name = name;
        this.fecha = fecha;
        this.genero = genero;
        this.proposito = proposito;
        this.peso = peso;
        this.color = color;
        this.raza = raza;
        this.idMadre = idMadre;
        this.idPadre = idPadre;
        this.salida = salida;
        this.lote = lote;
        this.salidaPor = salidaPor;
        this.numeroPartos = numeroPartos;
        this.partoFallo = partoFallo;
        this.fechaSalida = fechaSalida;
        this.finca = finca;
        this.usuario = usuario;
    }
    return Bovino;
}());
exports.Bovino = Bovino;
exports.bovinoService = new BovinoService();
//# sourceMappingURL=bovino-service.js.map