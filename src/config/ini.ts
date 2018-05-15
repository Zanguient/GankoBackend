import { Usuario, TYPE_USER } from "../services/models/users";

export const initialAdmin: Usuario = {
    type: "usuario",
    dni: "dni",
    rol: "usuario",
    plan: "basico",
    nombre: "Administrador",
    email: TYPE_USER,
    password: "admin",
    apellido: "admin",
    estado:"activo"
};