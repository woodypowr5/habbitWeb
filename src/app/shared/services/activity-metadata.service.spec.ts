import { TestBed } from '@angular/core/testing';
import { ActivityMetadataService } from './activity-metadata.service';
import { Record } from '../types/record.model';

describe('ActivityMetadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
    expect(service).toBeTruthy();
  });

  describe('OrderObjectsByProperty()', () => {
    it('Should return 0 when arg records is an empty array', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [];
      const test = service.computeNumDays(argRecords);
      const expectedValue = 0;
      expect(test).toEqual(expectedValue);
    });
    it('Should include days without records in the returned total', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: null
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: null
        }
      ];
      const test = service.computeNumDays(argRecords);
      const expectedValue = 5;
      expect(test).toEqual(expectedValue);
    });
    it('Shouldnt matter if there are additional records between first and last dates', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: null
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 0),
          value: null
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: null
        }
      ];
      const test = service.computeNumDays(argRecords);
      const expectedValue = 5;
      expect(test).toEqual(expectedValue);
    });
  });

  describe('ComputeStandardDeviation()', () => {
    it('Should return 0 when arg records is an empty array', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [];
      const test = service.computeStandardDeviation(argRecords);
      const expectedValue = 0;
      expect(test).toEqual(expectedValue);
    });
    it('Should return 0 when there is only 1 record', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 5
        }
      ];
      const test = service.computeStandardDeviation(argRecords);
      const expectedValue = 0;
      expect(test).toBeCloseTo(expectedValue, 3);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeStandardDeviation(argRecords);
      const expectedValue = 0.81649658092773;
      expect(test).toBeCloseTo(expectedValue, 3);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 7
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 0),
          value: 23
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: 9
        }
      ];
      const test = service.computeStandardDeviation(argRecords);
      const expectedValue = 7.1180521680209;
      expect(test).toBeCloseTo(expectedValue, 3);
    });
  });

  describe('ComputeGlobalAverage()', () => {
    it('Should return null when arg records is an empty array', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [];
      const test = service.computeGlobalAverage(argRecords);
      const expectedValue = null;
      expect(test).toEqual(expectedValue);
    });
    it('Should return null when there are 0 record', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [];
      const test = service.computeGlobalAverage(argRecords);
      const expectedValue = null;
      expect(test).toBe(expectedValue);
    });
    it('Should return the value when there is only 1 record', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 5
        }
      ];
      const test = service.computeGlobalAverage(argRecords);
      const expectedValue = 5;
      expect(test).toBe(expectedValue);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeGlobalAverage(argRecords);
      const expectedValue = 2;
      expect(test).toBeCloseTo(expectedValue, 3);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 7
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 0),
          value: 23
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: 9
        }
      ];
      const test = service.computeGlobalAverage(argRecords);
      const expectedValue = 13;
      expect(test).toBeCloseTo(expectedValue, 3);
    });
  });

  describe('ComputeLongestRecordStreak()', () => {
    it('Should return 0 when there are 0 records', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 0;
      expect(test).toBe(expectedValue);
    });
    it('Should return 1 when only one record exits', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 5
        }
      ];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 1;
      expect(test).toBe(expectedValue);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 21, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 25, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 1;
      expect(test).toBe(expectedValue);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 26, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 2;
      expect(test).toBe(expectedValue);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 20, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 21, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 22, 10, 1, 9, 1),
          value: 3
        },
        {
          date: new Date(2018, 11, 23, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 24, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 5;
      expect(test).toBe(expectedValue);
    });
    it('Normal Case', () => {
      const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
      const argRecords: Record[] = [
        {
          date: new Date(2018, 11, 20, 10, 1, 9, 0),
          value: 1
        },
        {
          date: new Date(2018, 11, 21, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 22, 10, 1, 9, 1),
          value: 3
        },
        {
          date: new Date(2018, 11, 26, 10, 1, 9, 0),
          value: 2
        },
        {
          date: new Date(2018, 11, 27, 10, 1, 9, 1),
          value: 3
        }
      ];
      const test = service.computeLongestRecordStreak(argRecords);
      const expectedValue = 3;
      expect(test).toBe(expectedValue);
    });
  });

  describe('ComputeCurrentRecordStreak()', () => {
    it('Should return 0 when there are 0 records', () => {
    
        const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
        const argRecords: Record[] = [];
        const test = service.computeCurrentRecordStreak(argRecords);
        const expectedValue = 0;
        expect(test).toBe(expectedValue);
    });
    // it('Should return 1 when only one record exits', () => {
    //   const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
    //   const argRecords: Record[] = [
    //     {
    //       date: new Date(2018, 11, 27, 10, 1, 9, 0),
    //       value: 5
    //     }
    //   ];
    //   const test = service.computeLongestRecordStreak(argRecords);
    //   const expectedValue = 1;
    //   expect(test).toBe(expectedValue);
    // });
  });    
});
