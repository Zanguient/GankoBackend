"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bovino_service_1 = require("../../services/bovino-service");
var ResponseBody = /** @class */ (function () {
    function ResponseBody(success, data, err) {
        this.success = success;
        this.data = data;
        this.err = err;
    }
    return ResponseBody;
}());
function getBovinos(req, res, next) {
    console.log(req.body.id);
    bovino_service_1.bovinoService.findBovinos(req.body.id)
        .subscribe(function (data) {
        res.send(new ResponseBody(data ? true : false, data, null));
    }, function (err) {
        res.status(500).send(new ResponseBody(null, null, err));
    });
}
exports.getBovinos = getBovinos;
//# sourceMappingURL=get-bovinos.js.map