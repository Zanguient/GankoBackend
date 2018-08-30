import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get id(): string {
    return sessionStorage.getItem('id');
  }

  set id(id: string) {
    sessionStorage.setItem('id', id);
  }

  get token(): string {
    return sessionStorage.getItem('token');
  }

  set token(token: string) {
    sessionStorage.setItem('token', token);
  }

  get logged(): boolean {
    return sessionStorage.getItem('logged') === 'true';
  }

  set logged(logged: boolean) {
    sessionStorage.setItem('logged', '' + logged);
  }

  get farmName(): string {
    return sessionStorage.getItem('farmName');
  }

  set farmName(farmName: string) {
    sessionStorage.setItem('farmName', farmName);
  }

  get farmId(): string {
    return sessionStorage.getItem('farmId');
  }

  set farmId(farmId: string) {
    sessionStorage.setItem('farmId', farmId);
  }

  clear() {
    this.id = null;
    this.token = null;
    this.logged = false;
    this.farmId = null;
    this.farmName = null;
  }
}
