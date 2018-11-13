import { Injectable } from '@angular/core';
import { PLANS } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get id(): string {
    return this.get('id');
  }

  set id(id: string) {
    this.save('id', id);
  }

  get token(): string {
    return this.get('token');
  }

  set token(token: string) {
    this.save('token', token);
  }

  get logged(): boolean {
    return this.get('logged') === 'true';
  }

  set logged(logged: boolean) {
    this.save('logged', '' + logged);
  }

  get farmName(): string {
    return this.get('farmName');
  }

  set farmName(farmName: string) {
    this.save('farmName', farmName);
  }

  get farmId(): string {
    return this.get('farmId');
  }

  set farmId(farmId: string) {
    this.save('farmId', farmId);
  }

  get role(): string {
    return this.get('role');
  }

  set role(role: string) {
    this.save('role', role);
  }

  get plan(): string {
    return this.get('plan');
  }

  set plan(plan: string) {
    this.save('plan', plan);
  }

  get planDate(): Date {
    return new Date(this.get('planDate'));
  }

  set planDate(date: Date) {
    this.save('planDate', date + '');
  }

  private save(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  private get(key: string): string {
    return sessionStorage.getItem(key);
  }

  clear() {
    this.id = null;
    this.token = null;
    this.logged = false;
    this.farmId = null;
    this.farmName = null;
    this.plan = null;
    this.planDate = null;
  }

  validatePlan(size: number): boolean {
    const pl = this.plan;
    const limit = PLANS.find(x => x.name === pl).limit;
    return size < limit;
  }


}
