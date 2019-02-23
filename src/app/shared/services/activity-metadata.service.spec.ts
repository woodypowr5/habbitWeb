import { TestBed } from '@angular/core/testing';

import { ActivityMetadataService } from './activity-metadata.service';

describe('ActivityMetadataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityMetadataService = TestBed.get(ActivityMetadataService);
    expect(service).toBeTruthy();
  });
});
