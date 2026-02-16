import { TestBed } from '@angular/core/testing';

import { APIServcice } from './api-servcice';

describe('APIServcice', () => {
  let service: APIServcice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIServcice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
