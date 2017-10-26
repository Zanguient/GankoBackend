"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var finca_service_1 = require("../../services/finca-service");
var ResponseFinca = /** @class */ (function () {
    function ResponseFinca(success, data, err) {
        this.data = data;
    }
    return ResponseFinca;
}());
function deleteFinca(req, res, next) {
    var idFinca = req.params.idfinca;
    finca_service_1.fincaService.deleteFinca(idFinca)
        .subscribe(function (data) {
        res.send(new ResponseFinca(true, data, null));
    }, function (err) {
        res.status(500).send(new ResponseFinca(false, null, err));
    });
}
exports.deleteFinca = deleteFinca;
//# sourceMappingURL=delete-finca.js.map