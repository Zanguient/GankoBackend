export const TYPE_GRUPO = 'Group';
export class Group {
    id?: string;
    type?: string;
    finca: string;
    nombre: string;
    color: number;
    bovines: string[];
}
