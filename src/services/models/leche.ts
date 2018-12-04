export const TYPE_LECHE = 'SalidaLeche';
/**
 * @apiDefine Leche
 * @apiParam {object} Leche
 * @apiParam {string} Leche.id id de la Produccion
 * @apiParam {string} Leche.type type de la Produccion
 * @apiParam {string} Leche.idFarm id de la finca a la que pertenece la Produccion
 * @apiParam {date} Leche.fecha fecha de la Produccion
 * @apiParam {string} Leche.operacion operacion realizada
 * @apiParam {number} Leche.valorLitro valor del litro de Produccion
 * @apiParam {number} Leche.numeroLitros numero de Produccion
 * @apiParam {number} Leche.totalLitros total de Produccion
 */
export class Leche {
    id?: string;
    type?: string;
    idFarm?: string;
    fecha?: Date;
    operacion: string;
    valorLitro: number;
    numeroLitros: number;
    totalLitros: number;
}
