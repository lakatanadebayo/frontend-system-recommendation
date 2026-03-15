import { TestBed } from '@angular/core/testing';

import { UserDefaultService } from './user-default.service';

describe('UserDefaultService', () => {
  let service: UserDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
