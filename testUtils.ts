import {TestBed} from '@angular/core/testing';
import {FEATURE_TOGGLES_DI_TOKEN} from 'src/app/directives/feature-toggle.directive';

export const withFeatureToggle = (activeToggles: string[]) => {
  const toggles = activeToggles
    .map((toggleName) => ({[toggleName]: true}))
    .reduce((allToggles, toggle) => ({...allToggles, ...toggle}), {});

  TestBed.configureTestingModule({
    providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: toggles }]
  });
};
