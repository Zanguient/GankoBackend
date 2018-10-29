import { DBConnection } from "./db-connection";
import { config } from "../config/global";
import * as request from "request-promise";

export class FileService {

    private static _instance: FileService;
    static get instace(): FileService {
        if (FileService._instance == undefined) {
            FileService._instance = new FileService(DBConnection.instance);
        }
        return FileService._instance;
    }

    private url: string;

    constructor(private db: DBConnection) {
        this.url = config.syncgateway.host + "/" + config.syncgateway.db + "/";
    }

    saveFile(id: string, name: string, type: string, body: string) {
        return request(this.url + "_raw/" + id)
            .then(x => {
                const obj = JSON.parse(x);
                const rev = obj._sync.rev;
                const attachments = obj._attachments != undefined ? Object.keys(obj._attachments) : [];
                const lastIndex = attachments.length - 1;
                const attach = lastIndex > -1 ? "blob_" + (parseInt(attachments[lastIndex].split("_")[1]) + 1) : "blob_1";
                return { rev: rev, attach: attach };
            })
            .then(x => request(this.url + id + "/" + x.attach, { method: "PUT", body: new Buffer(body, "base64"), headers: { "Content-Type": type, "If-Match": x.rev }, encoding: undefined })
                .then(y => this.db.getById<any>(id))
                .then(y => {
                    const doc = y.doc;
                    const attachment = doc._attachments[x.attach];
                    if (!doc.files) doc.files = {};
                    doc.files[name] = {
                        "@type": "blob",
                        "content_type": type,
                        "digest": attachment.digest,
                        "length": attachment.length
                    };
                    return this.db.replace(id, doc);
                })
            );
    }

    file(id: string): Promise<Buffer> {
        return this.db.byId(id)
            .then((x: any) => x.value);
    }

}