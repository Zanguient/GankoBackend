import { Grupo } from './common';

export const TYPE_MANEJO = 'RegistroManejo';
/**
 * @apiDefine Manejo
 * @apiParam {object} Manejo
 * @apiParam {string} Manejo.id id el manejo
 * @apiParam {string} Manejo.type type del manejo
 * @apiParam {string} Manejo.idFinca id de la finca a la que pertenece el manejo
 * @apiParam {date} Manejo.fecha fecha del manejo
 * @apiParam {string} Manejo.titulo titulo del manejo
 * @apiParam {string} Manejo.descripcion descripcion del manejo
 * @apiParam {string} Manejo.idAplicacionUno id de la primera aplicacion
 * @apiParam {date} Manejo.fechaProxima fecha de la proxima aplicacion
 * @apiParam {number} Manejo.estadoProximo proximo estado del manejo
 * @apiParam {numiber} Manejo.frecuencia frecuencia de aplicacion
 * @apiParam {string} Manejo.unidadFrecuencia unidad de frecuencia de la aplicacion
 * @apiParam {number} Manejo.numeroAplicaciones cantidad de aplicaciones
 * @apiParam {number} Manejo.aplicacion numero de la aplicacion
 * @apiParam {string} Manejo.tipo tipo de aplicacion
 * @apiParam {string} Manejo.otro otro tipo de dato
 * @apiParam {string} Manejo.tratamiento tratamiento del manejo
 * @apiParam {string} Manejo.producto producto aplicado
 * @apiParam {string} Manejo.observaciones observaciones del manejo
 * @apiParam {number} Manejo.valorProducto valor del producto aplicado
 * @apiParam {number} Manejo.valorAsistencia valor de la asistencia del manejo
 * @apiParam {object} Manejo.grupo grupo del manejo
 * @apiParam {object} Manejo.bovinos id de bovinos a los que se les aplico el manejo
 * @apiParam {object} Manejo.noBovinos no de bovinos
 */
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
