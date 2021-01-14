import { TestBed } from '@angular/core/testing';

import { ListPageServicesService } from './list-page-services.service';

describe('ListPageServicesService', () => {
  let service: ListPageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
