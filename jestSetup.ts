import { FEATURE_TOGGLES_DI_TOKEN } from 'src/app/directives/feature-toggle.directive';
import { TestBed } from '@angular/core/testing';
import * as jest from 'jest';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {} }]
  });
});
