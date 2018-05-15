import { Manejo } from './bovinos';
export const TYPE_REGISTRO_MANEJO = "registroManejo";

export class RegistroManejo {
    type: string; // registroManejo
    fecha: Date;
    manejo: Manejo;
    bovinos: string[];
}