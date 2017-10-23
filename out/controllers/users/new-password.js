"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./../../services/user-service");
var response_body_1 = require("./../response-body");
function newPassword(req, res, next) {
    var oldPass = req.body.oldPass;
    var newPass = req.body.newPass;
    var id = req.id;
    user_service_1.service.changeOldPassword(oldPass, newPass, id)
        .subscribe(function (data) {
        res.send(new response_body_1.ResponseBody(true, null));
    }, function (err) {
        res.status(500).send(new response_body_1.ResponseBody(false, "Error Actualizando Entrada"));
    });
}
exports.newPassword = newPassword;
//# sourceMappingURL=new-password.js.map