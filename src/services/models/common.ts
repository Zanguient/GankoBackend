export const NOT_APPLIED = 0;
export const APPLIED = 1;
export const SKIPED = 2;
/**
 * @apiDefine Grupo
 * @apiParam {object} Grupo
 * @apiParam {string} Grupo.id id del grupo
 * @apiParam {string} Grupo.nombre nombre del grupo
 * @apiParam {number} Grupo.color color del grupo
 */
export class Grupo {
    id?: string;
    nombre: string;
    color: number;
}

