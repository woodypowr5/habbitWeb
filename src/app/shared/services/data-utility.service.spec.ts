import { TestBed } from '@angular/core/testing';
import { DataUtilityService } from './data-utility.service';

describe('DataUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUtilityService = TestBed.get(DataUtilityService);
    expect(service).toBeTruthy();
  });

  describe('OrderObjectsByProperty()', () => {
    it('Should return an empty array when arg objects is an empty array', () => {
      const service: DataUtilityService = TestBed.get(DataUtilityService);
      const argObjects: any[] = [];
      const argPropertName = 'prop2';
      const test = service.orderObjectsByProperty(argObjects, argPropertName);
      const expectedValue = [];
      expect(test).toEqual(expectedValue);
    });
    it('Should sort objects correctly based on arg propertyName', () => {
      const service: DataUtilityService = TestBed.get(DataUtilityService);
      const argObjects: any[] = [
        {
          prop1: 1,
          prop2: 'c'
        },
        {
          prop1: 2,
          prop2: 'b'
        },
        {
          prop1: 3,
          prop2: 'a'
        }
      ];
      const argPropertyName = 'prop2';
      const test = service.orderObjectsByProperty(argObjects, argPropertyName);
      const expectedValue: any[] = [
        {
          prop1: 3,
          prop2: 'a'
        },
        {
          prop1: 2,
          prop2: 'b'
        },
        {
          prop1: 1,
          prop2: 'c'
        }
        ];
      expect(test).toEqual(expectedValue);
    });
  });
});
