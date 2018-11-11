import { Usuario, TYPE_USER } from "../services/models/users";
let md5 = require('md5');

export const initialAdmin: Usuario = {
    type: "usuario",
    dni: "dni",
    rol: "admin",
    nombre: "Administrador",
    email: 'admin',
    pass: md5("admin"),
    apellido: "admin",
    estado:"activo",
    registro: new Date()
};