import { Grupo } from './common';
export const TYPE_ALIMENTACION = 'RegistroAlimentacion';
/**
 * @apiDefine Alimentacion
 * @apiParam {Object} Alimentacion JSON Object
 * @apiParam {string} Alimentacion.id id de couchbase
 * @apiParam {string} Alimentacion.type Parametro usado para buscar en couchbase
 * @apiParam {object} Alimentacion.grupo Grupo alimentado
 * @apiParam {date} Alimentacion.fecha Fecha de la alimentacion
 * @apiParam {string} Alimentacion.idFinca id de la finca
 * @apiParam {string} Alimentacion.tipoAlimento Tipo de alimento suministrado
 * @apiParam {number} Alimentacion.peso Peso del alimento suministrado
 * @apiParam {number} Alimentacion.valorkg Valor del alimento por Kg
 * @apiParam {number} Alimentacion.valorTotal Valor calculado total del alimento
 * @apiParam {object} Alimentacion.bovino Array con id's de bovinos alimentados
 */

export class Alimentacion {
    id?: string;
    type?: string;
    grupo?: Grupo;
    fecha?: Date;
    idFinca?: string;
    tipoAlimento: string;
    peso: number;
    valorkg: number;
    valorTotal: number;
    bovinos: string[];
}