import { TestBed } from '@angular/core/testing';

import { NgRemoteValidationsService } from './ng-remote-validations.service';

describe('NgRemoteValidationsService', () => {
  let service: NgRemoteValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRemoteValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
