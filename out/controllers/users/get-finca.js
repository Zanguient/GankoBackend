"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var finca_service_1 = require("../../services/finca-service");
var ResponseBody = /** @class */ (function () {
    function ResponseBody(success, data, err) {
        this.success = success;
        this.data = data;
        this.err = err;
    }
    return ResponseBody;
}());
function getFinca(req, res, next) {
    var fincas = req.body;
    finca_service_1.fincaService.findFincas(fincas.user)
        .subscribe(function (data) {
        res.send(new ResponseBody(data ? true : false, data, null));
    }, function (err) {
        res.status(500).send(new ResponseBody(null, null, err));
    });
}
exports.getFinca = getFinca;
//# sourceMappingURL=get-finca.js.map