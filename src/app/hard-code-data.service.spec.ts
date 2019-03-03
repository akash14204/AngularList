import { TestBed } from '@angular/core/testing';

import { HardCodeDataService } from './hard-code-data.service';

describe('HardCodeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodeDataService = TestBed.get(HardCodeDataService);
    expect(service).toBeTruthy();
  });
});
