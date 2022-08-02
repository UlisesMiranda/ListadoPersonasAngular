/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginGuardianService } from './login-guardian.service';

describe('Service: LoginGuardian', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardianService]
    });
  });

  it('should ...', inject([LoginGuardianService], (service: LoginGuardianService) => {
    expect(service).toBeTruthy();
  }));
});
