import { TestBed } from '@angular/core/testing';

import { GrupodeservicesService } from './grupodeservices.service';

describe('GrupodeservicesService', () => {
  let service: GrupodeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupodeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
