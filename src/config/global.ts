import { ConfigI } from "./cfg";

const CONFIG_DEV: ConfigI = {
    database: {
        host: "104.209.144.166",
        bucket: "ganko",
        username: "ganko",
        password: "123456"
    },
    syncgateway: {
        host: "http://104.209.144.166:4985",
        db: "ganko"
    }
};

const CONFIG_PROD: ConfigI = {
    database: {
        host: "localhost",
        // host: "http://104.209.144.166:8091",
        bucket: "ganko",
        username: "ganko",
        password: "123456"
    },
    syncgateway: {
        host: "http://localhost:4985",
        db: "ganko"
    }
};

export const DESK_PORT = 5000;

export const secret = "g4nk0B0v1no5";
const env = process.env.NODE_ENV || "development";
export const config = env == "development" ? CONFIG_DEV : CONFIG_PROD;