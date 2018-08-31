export const TYPE_GRUPO = 'Group';
/**
 * @apiDefine Group
 * @apiParam {object} Group
 * @apiParam {string} Group.id id del grupo
 * @apiParam {string} Group.type type del grupo
 * @apiParam {string} Group.finca finca a la que pertenece el grupo
 * @apiParam {string} Group.nombre nombre del grupo
 * @apiParam {number} Group.color color del grupo
 * @apiParam {object} Group.bovines id de bovinos que pertenecen al grupo
 */
export class Group {
    id?: string;
    type?: string;
    finca?: string;
    nombre: string;
    color: number;
    bovines: string[];
}
