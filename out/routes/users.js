"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var token_validation_1 = require("../middlewares/token-validation");
var check_usuario_1 = require("../middlewares/check-usuario");
var users = express_1.Router();
users.post('/create-user', check_usuario_1.CheckUsuario, index_1.createUser);
users.post('/login', index_1.login);
users.post('/reset-password/', index_1.resetPassword);
users.post('/get-fincas', token_validation_1.ValidateToken, index_1.getFinca);
exports.default = users;
//# sourceMappingURL=users.js.map