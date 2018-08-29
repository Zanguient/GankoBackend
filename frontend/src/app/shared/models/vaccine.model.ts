import { Grupo } from './common.model';

export const TYPE_VACUNA = 'RegistroVacuna';
export class Vacuna {
    id?: string;
    type?: string;
    idFinca?: string;
    idAplicacionUno?: string;
    fecha?: Date;
    fechaProxima?: Date;
    estadoProximo?: number;
    nombre: string;
    dosisMl?: number;
    frecuencia: number;
    unidadFrecuencia: string;
    grupo?: Grupo;
    valor: number;
    bovinos?: string[];
    noBovinos?: string[];
    titulo?: string;
    descripcion?: string;
}
