import { Grupo } from './common';

export const TYPE_MANEJO = 'RegistroManejo';
export class Manejo {
    id?: string;
    type?: string;
    idFinca?: string;
    fecha?: Date;
    titulo?: string;
    descripcion?: string;
    idAplicacionUno?: string;
    fechaProxima?: Date;
    estadoProximo?: number;
    frecuencia?: number;
    unidadFrecuencia?: string;
    numeroAplicaciones?: number;
    aplicacion?: number;
    tipo?: string;
    otro?: string;
    tratamiento?: string;
    producto?: string;
    observaciones?: string;
    valorProducto?: number;
    valorAsistencia?: number;
    grupo?: Grupo;
    bovinos?: string[];
    noBovinos?: string[];
}
