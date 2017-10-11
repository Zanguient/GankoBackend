"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/users/index");
var users = express_1.Router();
users.post('/login', index_1.login);
exports.default = users;
//# sourceMappingURL=users.js.map