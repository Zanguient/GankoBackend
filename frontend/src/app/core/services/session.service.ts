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

  get role(): string {
    return sessionStorage.getItem('role');
  }

  set role(role: string) {
    sessionStorage.setItem('role', role);
  }

  get plan(): string {
    return sessionStorage.getItem('plan');
  }

  set plan(plan: string) {
    sessionStorage.setItem('plan', plan);
  }

  get planDate(): Date {
    return new Date(sessionStorage.getItem('planDate'));
  }

  set planDate(date: Date) {
    sessionStorage.setItem('planDate', date + '');
  }

  clear() {
    this.id = null;
    this.token = null;
    this.logged = false;
    this.farmId = null;
    this.farmName = null;
  }
}
