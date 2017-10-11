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
    UserService.prototype.login = function (user, pass) {
        return this.query("SELECT * FROM " + table + " WHERE nombre = ? AND apelido = ?", [user, pass]);
    };
    return UserService;
}(database_service_1.DatabaseService));
exports.UserService = UserService;
var Usuario = /** @class */ (function () {
    function Usuario(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
exports.service = new UserService();
//# sourceMappingURL=user-service.js.map