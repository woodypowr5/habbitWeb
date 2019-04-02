import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  areSameDates(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
  }

  computeDaysBetween(firstDate: Date, secondDate: Date): number {
    return Math.floor(Math.abs((secondDate.valueOf() - firstDate.valueOf()) / 86400000));
  }
}
