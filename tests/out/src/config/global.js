"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    production: {
        secret: "Ganko2017",
        database: {
            host: 'us-cdbr-iron-east-05.cleardb.net',
            user: 'bb942c918452fa',
            password: 'e45e8c49',
            database: 'heroku_6de81001f978b1a'
        }
    },
    test: {
        secret: "Ganko2017",
        database: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'test'
        }
    }
};
exports.loadCollection = function (colName, db) {
    return new Promise(function (resolve) {
        db.loadDatabase({}, function () {
            var _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        });
    });
};
//# sourceMappingURL=global.js.map