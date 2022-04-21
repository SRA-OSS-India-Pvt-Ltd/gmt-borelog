import { TestBed } from '@angular/core/testing';

import { CompleteTestServiceService } from './complete-test-service.service';

describe('CompleteTestServiceService', () => {
  let service: CompleteTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
