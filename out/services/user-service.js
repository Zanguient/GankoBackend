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
var table = "usuario";
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //permite insertar un nuevo usuario
    UserService.prototype.addUser = function (nombre, apellido, email, usuario, password, identificacion, estado) {
        return this.query('INSERT INTO ' + table + ' (`nombre`,`apellido`,`email`,`usuario`,`password`,`identificacion`,`estado`)VALUES(?,?,?,?,?,?,?);', [nombre, apellido, email, usuario, password, identificacion, estado]);
    };
    //permite verificar si el nuevo usuario ya existe con el correo suministrado
    UserService.prototype.checkUser = function (email) {
        return this.query("SELECT email from " + table + " where email = ?", [email]);
    };
    //permite verificar si el usuario y contraseña son correctos para el login
    UserService.prototype.login = function (user, pass) {
        return this.query("SELECT * FROM " + table + " WHERE usuario = ? AND password = ?", [user, pass]);
    };
    //permite verificar si el correo existe y el envio del correo para restaurar la contraseña
    UserService.prototype.resetPassword = function (email) {
        return this.query("SELECT email,estado FROM " + table + " WHERE email = ? ", [email]);
    };
    //cambia la contraseña antigua por la nueva
    UserService.prototype.changePassword = function (pass, email) {
        return this.query("UPDATE " + table + " SET password = ? WHERE email = ? ", [pass, email]);
    };
    return UserService;
}(database_service_1.DatabaseService));
exports.UserService = UserService;
var Usuario = /** @class */ (function () {
    function Usuario(id, name, lastname) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
var Email = /** @class */ (function () {
    function Email(email, estado) {
        this.email = email;
        this.estado = estado;
    }
    return Email;
}());
exports.Email = Email;
exports.service = new UserService();
//# sourceMappingURL=user-service.js.map