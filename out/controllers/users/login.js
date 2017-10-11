"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../services/user-service");
var ResponseBody = /** @class */ (function () {
    function ResponseBody(success, data, err) {
        this.success = success;
        this.data = data;
        this.err = err;
    }
    return ResponseBody;
}());
function login(req, res, next) {
    var auth = req.body;
    user_service_1.service.login(auth.username, auth.password)
        .subscribe(function (data) {
        res.send(new ResponseBody(data ? true : false, data, null));
    }, function (err) {
        res.status(500).send(new ResponseBody(false, null, err));
    });
}
exports.login = login;
//# sourceMappingURL=login.js.map