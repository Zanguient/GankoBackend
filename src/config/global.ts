
import * as del from 'del';
import * as Loki from 'lokijs';


export const config = {
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
}

export const loadCollection = function (colName, db: Loki): Promise<LokiCollection<any>> {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(colName) || db.addCollection(colName);
            resolve(_collection);
        })
    });
}