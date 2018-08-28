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
  filter: Subject<string> = new Subject();

  filters: Filter = {
    leche: false, ceba: false, ambos: false, celo: false, servicio: false,
    diagnostico: false, prenez: false, retirados: false
  };

  showRetired = true;

  breadcrumb: Bread[];
  nextNavigation: any[];

  constructor() { }

  notifyFilter(filter: string) {
    const value = this.filters[filter];
    this.filters[filter] = !value;
    this.filter.next(this.makeQuery());
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

  clearSearch() {
    this.searchText = '';
    this.searching = false;
    this.search.next('');
  }

  private makeQuery(): string {
    return [['leche', this.filters.leche], ['ceba', this.filters.ceba], ['ambos', this.filters.ambos],
    ['celo', this.filters.celo], ['servicio', this.filters.servicio], ['diagnostico', this.filters.diagnostico],
    ['prenez', this.filters.prenez], ['retirados', this.filters.retirados]]
      .filter(x => x[1])
      .map(x => x[0] + '=' + x[1])
      .join('&');
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

export interface Bread {
  path?: string;
  title: string;
}
