export const TYPE_LECHE = 'SalidaLeche';
/**
 * @apiDefine Leche
 * @apiParam {object} Leche
 * @apiParam {string} Leche.id id de la leche
 * @apiParam {string} Leche.type type de la leche
 * @apiParam {string} Leche.idFarm id de la finca a la que pertenece esa leche
 * @apiParam {date} Leche.fecha fecha de la transaccion
 * @apiParam {string} Leche.operacion operacion realizada
 * @apiParam {number} Leche.valorLitrovalor del litro
 * @apiParam {number} Leche.numeroLitros cantidad de litros de la operacion
 * @apiParam {number} Leche.totalLitros total de litros
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
