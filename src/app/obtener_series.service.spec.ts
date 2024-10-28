/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Obtener_seriesService } from './obtener_series.service';

describe('Service: Obtener_series', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Obtener_seriesService]
    });
  });

  it('should ...', inject([Obtener_seriesService], (service: Obtener_seriesService) => {
    expect(service).toBeTruthy();
  }));
});
