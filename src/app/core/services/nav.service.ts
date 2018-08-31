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
    diagnostico: false, destete: false, noDestete: false, retirados: false, macho: false, hembra: false
  };

  showRetired = true;

  breadcrumb: Bread[];
  nextNavigation: any[];

  constructor() { }

  notifyFilter(filter: string) {
    const value = this.filters[filter];
    this.filters[filter] = !value;

    if (filter === 'destete' && value) { this.filters.noDestete = false; }
    if (filter === 'noDestete' && value) { this.filters.destete = false; }
    if (filter === 'macho' && value) { this.filters.hembra = false; }
    if (filter === 'hembra' && value) { this.filters.macho = false; }

    this.filter.next(this.makeQuery());
  }

  clearFilter() {
    this.filters.ambos = false;
    this.filters.ceba = false;
    this.filters.leche = false;
    this.filters.servicio = false;
    this.filters.diagnostico = false;
    this.filters.destete = false;
    this.filters.noDestete = false;
    this.filters.macho = false;
    this.filters.hembra = false;
    this.filters.retirados = false;
    this.filters.celo = false;
  }

  clearSearch() {
    this.searchText = '';
    this.searching = false;
    this.search.next('');
  }

  private makeQuery(): string {

    const queries = [['leche', this.filters.leche], ['ceba', this.filters.ceba], ['ambos', this.filters.ambos],
    ['celo', this.filters.celo], ['servicio', this.filters.servicio], ['diagnostico', this.filters.diagnostico],
    ['retirados', this.filters.retirados]]
      .filter(x => x[1]);

    if (this.filters.destete || this.filters.noDestete) {
      queries.push(['destete', this.filters.destete]);
    }

    if (this.filters.macho || this.filters.hembra) {
      queries.push(['sexo', this.filters.macho ? 'Macho' : 'Hembra']);
    }

    return queries
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
  destete: boolean;
  noDestete: boolean;
  retirados: boolean;
  macho: boolean;
  hembra: boolean;

}

export interface Bread {
  path?: string;
  title: string;
}
