import { MeadowAlarm } from '../../shared/models/meadowAlarm.model';

export function meadowAlarms(): MeadowAlarm[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4),
        makeItem(5)
    ];
}

export function meadowAlarm(): MeadowAlarm {
    return makeItem(1);
}

function makeItem(item: number): MeadowAlarm {
    return {
        id: item.toString(),
        sequence: 12,
        type: 'tipo',
        meadow: '123',
        title: 'title 1',
        description: 'desc 1',
        wasShowed: true,
        fechaProxima: new Date(),
        tipo: 'tipo'
    };
}
