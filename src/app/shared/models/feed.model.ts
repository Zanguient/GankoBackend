import { Grupo } from './group.model';

export const TYPE_ALIMENTACION = 'RegistroAlimentacion';
export class Alimentacion {
    id?: string;
    type?: string;
    grupo?: Grupo;
    fecha: Date;
    idFinca?: string;
    tipoAlimento: string;
    peso: number;
    valorkg: number;
    valorTotal: number;
    bovinos: string[];
}
