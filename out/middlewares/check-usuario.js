"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../services/user-service");
var response_body_1 = require("../controllers/response-body");
function CheckUsuario(req, res, next) {
    var email = req.body.email;
    user_service_1.service.checkUser(email).subscribe(function (data) {
        if (data.length > 0) {
            res.send(new response_body_1.ResponseBody(false, "Error, el usuario ya existe"));
        }
        else {
            next();
        }
    });
}
exports.CheckUsuario = CheckUsuario;
//# sourceMappingURL=check-usuario.js.map