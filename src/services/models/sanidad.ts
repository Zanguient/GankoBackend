import { Sanidad } from './bovinos';

export const TYPE_REGISTRO_SANIDAD = "registroSanidad";

export class RegistroSanidad {
    type: string; // registroSanidad
    fecha: Date;
    evento: Sanidad;
    bovinos: string[];
}