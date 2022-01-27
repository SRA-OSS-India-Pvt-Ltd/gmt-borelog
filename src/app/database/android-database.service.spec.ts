import { TestBed } from '@angular/core/testing';

import { AndroidDatabaseService } from './android-database.service';

describe('AndroidDatabaseService', () => {
  let service: AndroidDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
