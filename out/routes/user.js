"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var check_usuario_1 = require("../middlewares/check-usuario");
var token_validation_1 = require("../middlewares/token-validation");
var user = express_1.Router();
user.post('/create-user', check_usuario_1.CheckUsuarioByEmail, check_usuario_1.CheckUsuarioByUser, index_1.createUser);
user.post('/login', index_1.login);
user.post('/reset-password', index_1.resetPassword);
user.post('/new-password', token_validation_1.ValidateToken, index_1.newPassword);
exports.default = user;
//# sourceMappingURL=user.js.map