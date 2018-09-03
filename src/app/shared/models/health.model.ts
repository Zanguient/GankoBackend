import { Grupo } from './common.model';

export const TYPE_SANIDAD = 'Sanidad';
export class Sanidad {
    id?: string;
    type?: string;
    idFinca?: string;
    idAplicacionUno?: string;
    fecha?: Date;
    fechaProxima?: Date;
    frecuencia: number;
    evento: string;
    otra?: string;
    diagnostico: string;
    tratamiento: string;
    producto: string;
    dosis: string;
    numeroAplicaciones: number;
    aplicacion: number;
    observaciones: string;
    valorProducto: number;
    valorAtencion: number;
    grupo?: Grupo;
    bovinos: string[];
    unidadFrecuencia: string;
    noBovinos: string[];
    estadoProximo?: number;
    titulo?: string;
    descripcion?: string;
    channels: string[];
}
