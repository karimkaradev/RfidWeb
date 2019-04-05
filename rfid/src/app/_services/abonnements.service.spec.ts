import { TestBed } from '@angular/core/testing';

import { AbonnementsService } from './abonnements.service';

describe('AbonnementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbonnementsService = TestBed.get(AbonnementsService);
    expect(service).toBeTruthy();
  });
});
