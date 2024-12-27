import { TestBed } from '@angular/core/testing';
import { ClerkAuthService } from './clerk-auth.service';

describe('ClerkAuthService', () => {
  let service: ClerkAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClerkAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
