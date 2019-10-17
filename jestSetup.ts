import {FeatureToggleDirective} from 'src/app/directives/feature-toggle.directive';
import {TestBed} from '@angular/core/testing';
import {withFeatureToggle} from 'testUtils';
import {FeatureToggleService} from './src/app/services/feature-toggle.service';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [FeatureToggleDirective],
    providers: [FeatureToggleService]
  });

  withFeatureToggle([]);
});
