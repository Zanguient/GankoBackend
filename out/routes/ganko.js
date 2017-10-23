"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var token_validation_1 = require("../middlewares/token-validation");
var check_usuario_1 = require("../middlewares/check-usuario");
var ganko = express_1.Router();
ganko.post('/create-user', check_usuario_1.CheckUsuario, index_1.createUser);
ganko.post('/login', index_1.login);
ganko.post('/reset-password/', index_1.resetPassword);
ganko.get('/get-fincas/', token_validation_1.ValidateToken, index_1.getFinca);
ganko.get('/get-bovinos/:id_finca', token_validation_1.ValidateToken, index_1.getBovinos);
exports.default = ganko;
//# sourceMappingURL=ganko.js.map