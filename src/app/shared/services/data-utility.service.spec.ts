import { TestBed } from '@angular/core/testing';

import { DataUtilityService } from './data-utility.service';

describe('DataUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUtilityService = TestBed.get(DataUtilityService);
    expect(service).toBeTruthy();
  });
});
