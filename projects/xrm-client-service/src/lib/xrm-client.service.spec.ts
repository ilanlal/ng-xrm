import { TestBed } from '@angular/core/testing';

import { XrmClientService } from './xrm-client.service';

describe('XrmClientService', () => {
  let service: XrmClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrmClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
