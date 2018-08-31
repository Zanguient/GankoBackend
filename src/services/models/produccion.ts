export const TYPE_PROD_LECHE = 'Produccion';
/**
 * @apiDefine Produccion
 * @apiParam {object} Produccion
 * @apiParam {string} Produccion.id de la produccion
 * @apiParam {string} Produccion.type type de la produccion
 * @apiParam {string} Produccion.bovino id del bovino
 * @apiParam {string} Produccion.jornada jornada de ordeño
 * @apiParam {string} Produccion.litros cantidad de litros extraidos
 * @apiParam {date} Produccion.fecha fecha de la extraccion
 */
export class Produccion {
    id?: string;
    type?: string;
    bovino: string;
    jornada: string;
    litros: string;
    fecha: Date;
}