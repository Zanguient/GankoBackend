"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var token_validation_1 = require("../middlewares/token-validation");
var finca = express_1.Router();
finca.get('/get-fincas', token_validation_1.ValidateToken, index_1.getFinca);
exports.default = finca;
//# sourceMappingURL=finca.js.map