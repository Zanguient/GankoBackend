import { Grupo } from './common';

export const TYPE_SANIDAD = 'Sanidad';

/**
 * @apiDefine Sanidad
 * @apiParam {object} Sanidad
 * @apiParam {string} Sanidad.id id de la sanidad
 * @apiParam {string} Sanidad.type type de sanidad
 * @apiParam {string} Sanidad.idFinca id de la finca
 * @apiParam {string} Sanidad.idAplicacionUno id de la aplicacion uno
 * @apiParam {date} Sanidad.fecha fecha de la sanidad
 * @apiParam {date} Sanidad.fechaProxima proxima fecha de la sanidad
 * @apiParam {number} Sanidad.frecuencia frecuencia de la sanidad
 * @apiParam {string} Sanidad.evento evento de la sanidad
 * @apiParam {string} Sanidad.otra otro dato de la sanidad
 * @apiParam {string} Sanidad.diagnostico diagnostico de la sanidad
 * @apiParam {string} Sanidad.tratamiento tratamiento de la sanida
 * @apiParam {string} Sanidad.producto producto aplicado
 * @apiParam {string} Sanidad.dosis dosis del producto aplicado
 * @apiParam {number} Sanidad.numeroAplicaciones numero de aplicaciones del producto
 * @apiParam {number} Sanidad.aplicacion numero de aplicacion
 * @apiParam {string} Sanidad.observaciones observaciones de la sanidad
 * @apiParam {number} Sanidad.valorProducto valor del producto
 * @apiParam {number} Sanidad.valorAtencion valor de la atencion
 * @apiParam {Grupo} Sanidad.grupo grupo al que se le aplico la sanidad
 * @apiParam {object} Sanidad.bovinos id de bovinos a los que se les aplico
 * @apiParam {string} Sanidad.unidadFrecuencia unidad de frecuencia de la aplicacion
 * @apiParam {object} Sanidad.noBovinos no de bovinos de la sanidad
 * @apiParam {number} Sanidad.estadoProximo estado proximo de la sanidad
 * @apiParam {string} Sanidad.titulo titulo de la sanidad
 * @apiParam {string} Sanidad.descripcion descripcion de la sanidad
 */
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
}
