import { Usuario, TYPE_USER } from "../services/models/users";
let md5 = require('md5');

export const initialAdmin: Usuario = {
    type: "usuario",
    dni: "dni",
    rol: "usuario",
    plan: "basico",
    nombre: "Administrador",
    email: TYPE_USER,
    pass: md5("admin"),
    apellido: "admin",
    estado:"activo"
};