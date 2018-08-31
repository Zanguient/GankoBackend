export const TYPE_CEBA = 'Ceba';
/**
 * @apiDefine Meat
 * @apiParam {object} Meat
 * @apiParam {string} Meat.id id de la ceba
 * @apiParam {stringv} Meat.type type de ceba
 * @apiParam {string} Meat.finca id de la finca a la cual pertenece esa ceba
 * @apiParam {string} Meat.bovino id del bovino al cual pertenece esa ceba
 * @apiParam {date} Meat.fecha fecha de la ceba
 * @apiParam {number} Meat.peso peso del bovino
 * @apiParam {number} Meat.gananciaPeso ganancia de peso del bovino
 * @apiParam {boolean} Meat.eliminado estado de la ceba
 */
export class Meat {
    id?: string;
    type: string;
    finca?: string;
    bovino?: string;
    fecha: Date;
    peso: number;
    gananciaPeso: number;
    eliminado: boolean;
}
