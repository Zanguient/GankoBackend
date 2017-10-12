"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("../config/global");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/mergeMap");
var mysql = require("promise-mysql");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.open = function () {
        return Observable_1.Observable
            .fromPromise(mysql.createConnection(global_1.config.database))
            .flatMap(function (con) { return Observable_1.Observable.of(con)
            .do(null, null, function () { return con.end(); }); });
    };
    DatabaseService.prototype.query = function (sql, params) {
        if (params === void 0) { params = []; }
        return this.open()
            .flatMap(function (con) { return con.query(sql, params); });
    };
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database-service.js.map