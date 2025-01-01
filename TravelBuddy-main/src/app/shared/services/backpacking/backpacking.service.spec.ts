import { TestBed } from '@angular/core/testing';

import { BackpackingService } from './backpacking.service';

describe('BackpackingService', () => {
  let service: BackpackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackpackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
