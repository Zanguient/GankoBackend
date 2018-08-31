export const TYPE_USER = "usuario";

/**
 * @apiDefine Usuario
 * @apiParam {object} Usuario
 * @apiParam {string} Usuario.id id del usuario
 * @apiParam {string} Usuario.type type de usuario
 * @apiParam {string} Usuario.nombre nombre del usuario
 * @apiParam {string} Usuario.apellido apellido del usuario
 * @apiParam {string} Usuario.email email del usuario
 * @apiParam {string} Usuario.pass pass de la cuenta
 * @apiParam {string} Usuario.dni numero de identificacion
 * @apiParam {string} Usuario.estado estado del usuario
 * @apiParam {string} Usuario.rol rol del usuario
 * @apiParam {string} Usuario.plan plan adquirido
 */
export class Usuario {
    id?:string
    type:string; //usuario
    nombre: string;
    apellido: string;
    email: string;
    pass: string;
    dni: string;
    estado: string;
    rol: string;
    plan: string;
}