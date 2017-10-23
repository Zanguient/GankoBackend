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
var user_service_1 = require("../../services/user-service");
var jsonwebtoken_1 = require("jsonwebtoken");
var global_1 = require("../../config/global");
var response_body_1 = require("../response-body");
var md5 = require('md5');
var ResponseLogin = /** @class */ (function (_super) {
    __extends(ResponseLogin, _super);
    function ResponseLogin(success, data, err) {
        var _this = _super.call(this, success, err) || this;
        _this.data = data;
        return _this;
    }
    return ResponseLogin;
}(response_body_1.ResponseBody));
function login(req, res, next) {
    var auth = req.body;
    user_service_1.service.login(auth.username, md5(auth.password))
        .subscribe(function (data) {
        var token = data.length > 0 ? jsonwebtoken_1.sign({ id: data[0].id }, global_1.config.secret) : null;
        res.send(new ResponseLogin(data.length > 0 ? true : false, { user: data[0], token: token }, "Usuario o Contraseña Incorrecto"));
    }, function (err) {
        res.status(500).send(new ResponseLogin(false, null, err));
    });
}
exports.login = login;
//# sourceMappingURL=login.js.map