import { Vacuna } from './bovinos';
export const TYPE_REGISTRO_VACUNAS = "registroVacunas";

export class RegistroVacunas {
    type: string; // registroVacunas
    fecha: Date;
    vacunas: Vacuna[];
    bovinos: string[];
}
