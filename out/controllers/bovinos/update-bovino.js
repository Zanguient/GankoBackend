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
var bovino_service_1 = require("../../services/bovino-service");
var response_body_1 = require("../response-body");
var ResponseBovino = /** @class */ (function (_super) {
    __extends(ResponseBovino, _super);
    function ResponseBovino(success, data, err) {
        var _this = _super.call(this, success, err) || this;
        _this.data = data;
        return _this;
    }
    return ResponseBovino;
}(response_body_1.ResponseBody));
function updateBovino(req, res, next) {
    var bovino = req.body;
    var idbovino = req.params.idbovino;
    var idusuario = req.id;
    bovino_service_1.bovinoService.updateBovino(idbovino, bovino.imagen, bovino.name, bovino.fecha, bovino.genero, bovino.proposito, bovino.peso, bovino.color, bovino.raza, bovino.idMadre, bovino.idPadre, bovino.salida, bovino.lote, bovino.salidaPor, bovino.numeroPartos, bovino.partoFallo, bovino.fechaSalida, bovino.finca, idusuario)
        .subscribe(function (data) {
        res.send(new ResponseBovino(data ? true : false, data, null));
    }, function (err) {
        res.status(500).send(new ResponseBovino(null, null, err));
    });
}
exports.updateBovino = updateBovino;
//# sourceMappingURL=update-bovino.js.map