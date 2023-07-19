import { TestBed } from '@angular/core/testing';

import { RutastService } from './rutast.service';

describe('RutastService', () => {
  let service: RutastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
