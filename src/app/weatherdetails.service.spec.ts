import { TestBed } from '@angular/core/testing';

import { WeatherdetailsService } from './weatherdetails.service';

describe('WeatherdetailsService', () => {
  let service: WeatherdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
