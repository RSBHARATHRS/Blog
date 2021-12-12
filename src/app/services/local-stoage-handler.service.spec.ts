import { TestBed } from '@angular/core/testing';

import { LocalStoageHandlerService } from './local-stoage-handler.service';

describe('LocalStoageHandlerService', () => {
  let service: LocalStoageHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoageHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
