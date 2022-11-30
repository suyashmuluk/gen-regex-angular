import { TestBed } from '@angular/core/testing';

import { GenRegexAngular } from './gen-regex-angular.service';

describe('GenRegexAngularService', () => {
  let service: GenRegexAngular;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenRegexAngular);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
