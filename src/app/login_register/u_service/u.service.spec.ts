import { TestBed, inject } from '@angular/core/testing';

import { UService } from './u.service';

describe('UService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UService]
    });
  });

  it('should be created', inject([UService], (service: UService) => {
    expect(service).toBeTruthy();
  }));
});
