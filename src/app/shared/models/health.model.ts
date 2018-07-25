import { Grupo } from './group.model';

export const TYPE_SANIDAD = 'Sanidad';
export class Sanidad {
    id?: string;
    type?: string;
    idFinca: string;
    fecha: Date;
    fechaProxima: Date;
    frecuencia: number;
    evento: string;
    otra?: string;
    diagnostico: string;
    tratamiento: string;
    producto: string;
    dosis: string;
    via: string;
    numeroAplicaciones: number;
    aplicacion: number;
    observaciones: string;
    valorProducto: number;
    valorAtencion: number;
    grupo?: Grupo;
    bovinos: string[];
    UnidadesFrecuencia: string;
    noBovinos: string[];
    estadoProximo: number;
}
