import { Group } from '../../shared/models/group.model';

export function groups(): Group[] {
    return [
        makeItem(1),
        makeItem(2),
        makeItem(3),
        makeItem(4)
    ];
}

export function group(): Group {
    return makeItem(1);
}

function makeItem(item: number): Group {
    return {
        id: '123',
        bovines: ['321', '456', '123'],
        color: item % 2 === 0 ? 4921451 : 4051634,
        finca: '123',
        nombre: 'Grupo ' + item
    };
}
