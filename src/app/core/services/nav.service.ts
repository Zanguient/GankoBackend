import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  title: string;
  searchable = false;
  filterable = false;

  searching = false;

  search: Subject<string> = new Subject();
  searchText = '';
  filter: Subject<Filter> = new Subject();

  filters: Filter = {
    leche: false, ceba: false, ambos: false, celo: false, servicio: false,
    diagnostico: false, prenez: false, retirados: false
  };

  constructor() { }

  notifyFilter(filter: string) {
    const value = this.filters[filter];
    this.filters[filter] = !value;
    this.filter.next(this.filters);
  }

  clearFilter() {
    this.filters.ambos = false;
    this.filters.ceba = false;
    this.filters.leche = false;
    this.filters.servicio = false;
    this.filters.diagnostico = false;
    this.filters.prenez = false;
    this.filters.retirados = false;
    this.filters.celo = false;
  }

}

export interface Filter {
  leche: boolean;
  ceba: boolean;
  ambos: boolean;
  celo: boolean;
  servicio: boolean;
  diagnostico: boolean;
  prenez: boolean;
  retirados: boolean;
}

