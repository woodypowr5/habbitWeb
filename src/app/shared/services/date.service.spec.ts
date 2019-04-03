import { DateService } from './date.service';
import { TestBed } from '@angular/core/testing';

describe('DateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service).toBeTruthy();
  });

  describe('areSameDates()', () => {
    it('Should return true if both args are the same date and same format', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24);
      const argDate2: Date = new Date(2018, 11, 24);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are the same date and different format', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2015, 2, 25);
      const argDate2: Date = new Date('Mar 25 2015');
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are same day, but 1 arg is missing time parameters', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2018, 11, 24);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return false if both args are same day, but 1 arg is different year', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2017, 11, 24, 10, 33, 30, 0);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = false;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are the same date and same format but different time', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2018, 11, 24, 10, 1, 9, 1);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
  });

  describe('computeDaysBetween()', () => {
    it('Should return 0 if the arguements are the same date object', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24);
      const argDate2: Date = new Date(2018, 11, 24);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const test2 = service.areSameDates(argDate1, argDate2);
      const expectedValue = 0;
      expect(test).toEqual(expectedValue);
    });
    it('Should return 0 if the arguements are the same day but not the same date object', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2018, 11, 24, 10, 1, 9, 1);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const expectedValue = 0;
      expect(test).toEqual(expectedValue);
    });
    it('Normal Case', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 27, 10, 1, 9, 1);
      const argDate2: Date = new Date(2018, 11, 23, 10, 1, 9, 0);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const expectedValue = 4;
      expect(test).toEqual(expectedValue);
    });
    it('Normal Case', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2015, 4, 11, 0, 0, 0, 0);
      const argDate2: Date = new Date(2019, 10, 26, 0, 0, 0, 1);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const expectedValue = 1660;
      expect(test).toEqual(expectedValue);
    });
    it('Edge Case: slightly greater than 1 day', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 1, 9, 1);
      const argDate2: Date = new Date(2018, 11, 23, 10, 1, 9, 0);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const expectedValue = 1;
      expect(test).toEqual(expectedValue);
    });
    it('Edge Case: slightly less than than 1 day', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 0, 0, 0, 0);
      const argDate2: Date = new Date(2018, 11, 23, 0, 0, 0, 1);
      const test = service.computeDaysBetween(argDate1, argDate2);
      const expectedValue = 0;
      expect(test).toEqual(expectedValue);
    });
  });

  describe('areSameDates()', () => {
    it('Should return true if both args are the same date and same format', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24);
      const argDate2: Date = new Date(2018, 11, 24);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are the same date and different format', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2015, 2, 25);
      const argDate2: Date = new Date('Mar 25 2015');
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are same day, but 1 arg is missing time parameters', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2018, 11, 24);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
    it('Should return false if both args are same day, but 1 arg is different year', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2017, 11, 24, 10, 33, 30, 0);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = false;
      expect(test).toEqual(expectedValue);
    });
    it('Should return true if both args are the same date and same format but different time', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate1: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argDate2: Date = new Date(2018, 11, 24, 10, 1, 9, 1);
      const test = service.areSameDates(argDate1, argDate2);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
  });

  describe('IsNextDay)', () => {
    it('Should return false if both date objects are the same date', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argPrevDate: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const test = service.isNextDay(argDate, argPrevDate);
      const expectedValue = false;
      expect(test).toEqual(expectedValue);
    });
    it('Should return false if arg previousDate is less than 1 day later than arg date', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate: Date =     new Date(2018, 11, 24, 10, 33, 30, 0);
      const argPrevDate: Date = new Date(2018, 11, 24, 10, 33, 30, 20);
      const test = service.isNextDay(argDate, argPrevDate);
      const expectedValue = false;
      expect(test).toEqual(expectedValue);
    });
    it('Should return false if arg previousDate is more than 1 day later than arg date', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate: Date = new Date(2018, 11, 24, 10, 33, 30, 0);
      const argPrevDate: Date = new Date(2018, 11, 27, 10, 30, 20);
      const test = service.isNextDay(argDate, argPrevDate);
      const expectedValue = false;
      expect(test).toEqual(expectedValue);
    });
    it('Normal Case', () => {
      const service: DateService = TestBed.get(DateService);
      const argDate: Date =     new Date(2018, 11, 28);
      const argPrevDate: Date = new Date(2018, 11, 27);
      const test = service.isNextDay(argDate, argPrevDate);
      const expectedValue = true;
      expect(test).toEqual(expectedValue);
    });
  });
});
