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

  isNextDay(date: Date, previousDaysDate: Date): boolean {
    const addOneDay: Date = previousDaysDate;
    addOneDay.setDate(previousDaysDate.getDate() + 1);
    return this.areSameDates(addOneDay, date);
  }

  computeDaysBetween(firstDate: Date, secondDate: Date): number {
    return Math.floor(Math.abs((secondDate.valueOf() - firstDate.valueOf()) / 86400000));
  }

  setToEndOfDay(date: Date): Date { // need tests
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(), 23, 59, 59);
  }

  setToStartOfDay(date: Date): Date { // need tests
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(), 0, 0, 0);
  }
}
