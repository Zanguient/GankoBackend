"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user-service");
var nodemailer = require('nodemailer');
var ResponseBody = /** @class */ (function () {
    function ResponseBody(success, data, err) {
        this.success = success;
        this.data = data;
        this.err = err;
    }
    return ResponseBody;
}());
//se ejecuta cuando se requiere recuperacion de contraseña
function resetPassword(req, res, next) {
    var reset = req.body;
    user_service_1.service.resetPassword(reset.email)
        .subscribe(function (data) {
        if (data.length > 0) {
            sendMail(data[0]);
            res.send(new ResponseBody(data ? true : false, data[0], null));
        }
        else {
            res.send(new ResponseBody(null, null, "Error, el Email no existe"));
        }
    }, function (err) {
        res.status(500).send(new ResponseBody(false, null, err));
    });
}
exports.resetPassword = resetPassword;
//envia el correo con la nueva contraseña y la inserta en la base de datos
function sendMail(data) {
    var mailOptions;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "cristian9016fxchoice@gmail.com",
            pass: "3177313834"
        }
    });
    var state = data.estado;
    var mail = data.email;
    if (state == "activo") {
        var newPass = Math.random().toString(36).slice(2);
        var bodyText = "This is your new password, use it to login into Ganko, then change it for a new one: " + newPass;
        mailOptions = {
            from: '"Ganko" <service@ganko.com>',
            to: mail + "," + mail,
            subject: 'Contraseña Cambiada ✔',
            text: 'Contraseña Cambiada',
            html: bodyText
        };
        //se cambia el password por el nuevo
        user_service_1.service.changePassword(newPass, mail)
            .subscribe();
    }
    else {
        var bodyText = "Error, su cuenta no se encuentra activa, si cree que esto es un error, por favor contactese con servicio al cliente";
        mailOptions = {
            from: '"Ganko"',
            to: "cristian9016@gmail.com,cristian9016@gmail.com",
            subject: 'Error Cuenta Desactivada',
            text: 'Error Cuenta Desactivada',
            html: bodyText
        };
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    });
    return;
}
//# sourceMappingURL=reset-pass.js.map