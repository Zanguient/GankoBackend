import { ConfigI } from "./cfg";

const CONFIG_DEV: ConfigI = {
    database: {
        host: "localhost",
        bucket: "ganko",
        username: "admin",
        password: "123456"
    }
};

const CONFIG_PROD: ConfigI = {
    database: {
        host: "localhost",
        bucket: "ganko",
        username: "admin",
        password: "123456"
    }
};
export const secret = "g4nk0B0v1no5";
const env = process.env.NODE_ENV || "development";
export const config = env == "development" ? CONFIG_DEV : CONFIG_PROD;