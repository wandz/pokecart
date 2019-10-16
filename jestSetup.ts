import {FeatureToggleDirective} from 'src/app/directives/feature-toggle.directive';
import {TestBed} from '@angular/core/testing';
import {PokemonSpriteComponent} from 'src/app/components/pokemon-sprite/pokemon-sprite.component';
import {withFeatureToggle} from 'testUtils';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [FeatureToggleDirective, PokemonSpriteComponent],
  });

  withFeatureToggle([]);
});
