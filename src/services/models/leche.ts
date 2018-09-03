export const TYPE_PROD_LECHE = 'Produccion';
/**
 * @apiDefine Produccion
 * @apiParam {object} Produccion
 * @apiParam {string} Produccion.id id de la Produccion
 * @apiParam {string} Produccion.type type de la Produccion
 * @apiParam {string} Produccion.idFarm id de la finca a la que pertenece la Produccion
 * @apiParam {date} Produccion.fecha fecha de la Produccion
 * @apiParam {string} Produccion.operacion operacion realizada
 * @apiParam {number} Produccion.valorLitro valor del litro de Produccion
 * @apiParam {number} Produccion.numeroLitros numero de Produccion
 * @apiParam {number} Produccion.totalLitros total de Produccion
 */
export class Produccion {
    id?: string;
    type?: string;
    bovino: string;
    jornada: string;
    litros: string;
    fecha: Date;
}
