import { Finca } from '../../shared/models/farm.model';

export function farms(): Finca[] {
    return [
        { hectareas: 10, nombre: 'La finca', ubicacion: 'Ubicacion', id: '123' }
    ];
}
