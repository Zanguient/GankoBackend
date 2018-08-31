export const TYPE_LECHE = 'SalidaLeche';
/**
 * @apiDefine Leche
 * @apiParam {object} Leche
 * @apiParam {string} Leche.id id de la leche
 * @apiParam {string} Leche.type type de la leche
 * @apiParam {string} Leche.idFarm id de la finca a la que pertenece la leche
 * @apiParam {date} Leche.fecha fecha de la leche
 * @apiParam {string} Leche.operacion operacion realizada
 * @apiParam {number} Leche.valorLitro valor del litro de leche
 * @apiParam {number} Leche.numeroLitros numero de litros
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
