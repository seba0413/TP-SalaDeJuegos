import { TestBed } from '@angular/core/testing';

import { JugadaService } from './jugada.service';

describe('JugadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JugadaService = TestBed.get(JugadaService);
    expect(service).toBeTruthy();
  });
});
