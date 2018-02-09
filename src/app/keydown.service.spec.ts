import { TestBed, inject } from '@angular/core/testing';

import { KeydownService } from './keydown.service';

describe('KeydownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeydownService]
    });
  });

  it('should be created', inject([KeydownService], (service: KeydownService) => {
    expect(service).toBeTruthy();
  }));
});
