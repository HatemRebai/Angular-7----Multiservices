import { TestBed } from '@angular/core/testing';

import { ReservationService } from './reserservice.service';

describe('ReserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationService = TestBed.get(ReservationService);
    expect(service).toBeTruthy();
  });
});
