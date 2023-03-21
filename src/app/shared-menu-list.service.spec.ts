import { TestBed } from '@angular/core/testing';

import { SharedMenuListService } from './shared-menu-list.service';

describe('SharedMenuListService', () => {
  let service: SharedMenuListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMenuListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
