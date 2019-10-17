import {TestBed} from '@angular/core/testing';

import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleService} from './feature-toggle.service';

describe('FeaturetoggleService', () => {
  it('returns true if feature is active', () => {
    TestBed.configureTestingModule({
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': true}}]
    });
    const service: FeatureToggleService = TestBed.get(FeatureToggleService);

    expect(service.isActive('show-cartcount')).toBeTruthy();
  });

  it('returns false if the feature toggle is false', () => {
    TestBed.configureTestingModule({
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {nonTrueFlag: false}}]
    });

    const service: FeatureToggleService = TestBed.get(FeatureToggleService);

    expect(service.isActive('show-cartcount')).toBeFalsy();
  });
});
