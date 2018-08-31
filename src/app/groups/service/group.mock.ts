import { Group } from '../../shared/models/group.model';

export function groups(): Group[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function group(item?: string): Group {
    if (item) {
        return makeItem(+item);
    } else {
        return makeItem(1);
    }
}

function makeItem(item: number): Group {
    return {
        id: item.toString(),
        bovines: ['321', '456', '123'],
        color: item % 2 === 0 ? 4921451 : 16711680,
        finca: '123',
        nombre: 'Grupo ' + item,
        pradera: item % 2 ? null : item.toString()
    };
}
