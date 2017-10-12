"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/users/index");
var users = express_1.Router();
users.post('/login', index_1.login);
users.post('/reset-password/', index_1.resetPassword);
exports.default = users;
//# sourceMappingURL=users.js.map