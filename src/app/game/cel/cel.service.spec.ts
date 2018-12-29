import { TestBed } from '@angular/core/testing';

import { CelService } from './cel.service';

describe('CelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelService = TestBed.get(CelService);
    expect(service).toBeTruthy();
  });
});
