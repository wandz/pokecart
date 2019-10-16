import {FeatureToggleDirective} from 'src/app/directives/feature-toggle.directive';
import {TestBed} from '@angular/core/testing';
import {withFeatureToggle} from 'testUtils';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [FeatureToggleDirective],
  });

  withFeatureToggle([]);
});
