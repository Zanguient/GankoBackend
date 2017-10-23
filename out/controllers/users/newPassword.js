"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./../../services/user-service");
function newPassword(req, res, next) {
    var change = req.body;
    var oldPass = req.body.oldpass;
    var newPass = req.body.newPass;
    var id = req.id;
    user_service_1.service.changeOldPassword(oldPass, newPass, id)
        .subscribe(function (data) {
        res.send("success: ", true);
    }, function (err) {
        res.status(500).send("Error Actualizando Entrada");
    });
}
exports.newPassword = newPassword;
//# sourceMappingURL=newPassword.js.map