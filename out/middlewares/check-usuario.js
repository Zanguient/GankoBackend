"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../services/user-service");
var response_body_1 = require("../controllers/response-body");
function CheckUsuarioByEmail(req, res, next) {
    var email = req.body.email;
    user_service_1.service.checkUserByEmail(email).subscribe(function (data) {
        if (data.length > 0) {
            res.send(new response_body_1.ResponseBody(false, "Error, el Email ya esta registrado"));
        }
        else {
            next();
        }
    });
}
exports.CheckUsuarioByEmail = CheckUsuarioByEmail;
function CheckUsuarioByUser(req, res, next) {
    var usuario = req.body.usuario;
    user_service_1.service.checkUserByUser(usuario).subscribe(function (data) {
        if (data.length > 0) {
            res.send(new response_body_1.ResponseBody(false, "Error, el usuario ya existe"));
        }
        else {
            next();
        }
    });
}
exports.CheckUsuarioByUser = CheckUsuarioByUser;
//# sourceMappingURL=check-usuario.js.map