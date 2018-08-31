import { Grupo } from './common';

export const TYPE_VACUNA = 'RegistroVacuna';

/**
 * @apiDefine Vacuna
 * @apiParam {object} Vacuna
 * @apiParam {string} Vacuna.id id de la vacuna
 * @apiParam {string} Vacuna.type type de vacuna
 * @apiParam {string} Vacuna.idFinca id de la finca
 * @apiParam {string} Vacuna.idAplicacionUno id de la aplicacion uno
 * @apiParam {date} Vacuna.fecha fecha de la aplicacion
 * @apiParam {date} Vacuna.fechaProxima proxima fecha de aplicacion
 * @apiParam {number} Vacuna.estadoProximo estado proximo de la vacuna
 * @apiParam {string} Vacuna.nombre nombre de la vacuna
 * @apiParam {number} Vacuna.dosisMl dosis d ela vacuna
 * @apiParam {number} Vacuna.frecuencia frecuencia de la vacuna
 * @apiParam {string} Vacuna.unidadFrecuencia unidad de frecuencia de la vacuna
 * @apiParam {Grupo} Vacuna.grupo grupo al que se le aplica la vacuna
 * @apiParam {number} Vacuna.valor valor de la vacuna
 * @apiParam {object} Vacuna.bovinos array de id de bovinos a los que se les aplico la vacuna
 * @apiParam {object} Vacuna.noBovinos cantidad de bovinos
 * @apiParam {string} Vacuna.titulo titulo de la vacuna
 * @apiParam {string} Vacuna.descripcion descripcion de la vacuna
 */
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
