import { TestBed } from '@angular/core/testing';

import { ObservablesGeneratorService } from './observables-generator.service';

describe('ObservablesGeneratorService', () => {
  let service: ObservablesGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
