export const TYPE_ALARMA_PRADERA = 'MeadowAlarm';

/**
 * @apiDefine AlarmaPradera
 * @apiParam {object} AlarmaPradera
 * @apiParam {string} AlarmaPradera.id id de la alarma
 * @apiParam {string} AlarmaPradera.type type de alarma
 * @apiParam {string} AlarmaPradera.meadow pradera a la que se le pone la alarma
 * @apiParam {string} AlarmaPradera.title titulo de la alarma
 * @apiParam {string} AlarmaPradera.description descripcion de la alarma
 * @apiParam {boolean} AlarmaPradera.wasShowed verifica si la alarma ya fue mostrada
 * @apiParam {date} AlarmaPradera.fechaProxima fecha en que debera salir la alarma
 * @apiParam {string} AlarmaPradera.tipo tipo de alarma
 */
export class AlarmaPradera{
    id: string;
    type: string;
    meadow:string;
    title: string;
    description: string;
    wasShowed: boolean;
    fechaProxima: Date;
    tipo:string;
}