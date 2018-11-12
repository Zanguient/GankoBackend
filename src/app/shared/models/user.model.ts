export const TYPE_USUARIO = 'usuario';
export class User {
    id?: string;
    type: string;
    registro?: Date;
    nombre: string;
    apellido: string;
    celular: string;
    email: string;
    pass: string;
    dni: string;
    estado: string;
    rol: string;
    plan?: string;
    inicioPlan?: Date;
    ultimoPago?: Date;
}
export const ROL_ADMIN = 'admin';
export const ROL_RANCHER = 'ganadero';
export const ROL_ASSISTANT = 'asistente';

export const PLANS = [
    { name: 'gratuito', limit: 10 },
    { name: 'basico', limit: 35 },
    { name: 'basico2', limit: 60 },
    { name: 'basico3', limit: 100 },
    { name: 'premium', limit: 500 },
    { name: 'premium2', limit: 0 }
];

