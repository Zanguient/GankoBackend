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
var finca_service_1 = require("../../services/finca-service");
var response_body_1 = require("../response-body");
var ResponseLogin = /** @class */ (function (_super) {
    __extends(ResponseLogin, _super);
    function ResponseLogin(success, data, err) {
        var _this = _super.call(this, success, err) || this;
        _this.data = data;
        return _this;
    }
    return ResponseLogin;
}(response_body_1.ResponseBody));
function addFinca(req, res, next) {
    var finca = req.body;
    finca.usuario = req.id;
    finca_service_1.fincaService.addFinca(finca.nombre, finca.ubicacion, finca.hectareas, finca.usuario)
        .subscribe(function (data) {
        res.send(new ResponseLogin(true, data, null));
    }, function (err) {
        res.status(500).send(new ResponseLogin(false, null, err));
    });
}
exports.addFinca = addFinca;
//# sourceMappingURL=add-finca.js.map