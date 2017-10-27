"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var token_validation_1 = require("../middlewares/token-validation");
var bovino = express_1.Router();
bovino.get('/get-bovinos/:idfinca', token_validation_1.ValidateToken, index_1.getBovinos);
bovino.post('/add-bovino/', token_validation_1.ValidateToken, index_1.addBovino);
bovino.put('/update-bovino/:idbovino', token_validation_1.ValidateToken, index_1.updateBovino);
bovino.delete('/delete-bovino/:idbovino', token_validation_1.ValidateToken, index_1.deleteBovino);
exports.default = bovino;
//# sourceMappingURL=bovino.js.map