import { Grupo } from './common.model';

export const TYPE_MANEJO = 'RegistroManejo';
export class Manejo {
    id: string;
    type: string;
    idFinca: string;
    fecha: Date;
    idDosisUno: string; // = id
    fechaProx: Date;
    frecuencia: number;
    numeroAplicaciones: number;
    aplicacion: number;
    tipo: string;
    otro: string;
    tratamiento: string;
    producto: string;
    observaciones: string;
    orProducto: number;
    orAsistencia: number;
    grupo: Grupo;
    bovino: string[];
}
