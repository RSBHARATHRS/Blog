/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogDataService } from './blog-data.service';

describe('Service: BlogData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogDataService]
    });
  });

  it('should ...', inject([BlogDataService], (service: BlogDataService) => {
    expect(service).toBeTruthy();
  }));
});
