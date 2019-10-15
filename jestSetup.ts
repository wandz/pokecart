import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective} from 'src/app/directives/feature-toggle.directive';
import {TestBed} from '@angular/core/testing';
import {PokemonSpriteComponent} from './src/app/components/pokemon-sprite/pokemon-sprite.component';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [FeatureToggleDirective, PokemonSpriteComponent],
    providers: [{ provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {} }]
  });
});
