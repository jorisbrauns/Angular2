/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';

describe('Service: Test', () => {
  beforeEach(() => {
    addProviders([TestService]);
  });

  it('should ...',
    inject([TestService],
      (service: TestService) => {
        expect(service).toBeTruthy();
      }));
});
