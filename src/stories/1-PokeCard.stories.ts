import {CardComponent} from 'src/app/components/card/card.component';
import {Pokemon} from 'src/app/models/pokemon.model';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective} from '../app/directives/feature-toggle.directive';
import {PokemonSpriteComponent} from '../app/components/pokemon-sprite/pokemon-sprite.component';

storiesOf('PokeCard', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent, FeatureToggleDirective, PokemonSpriteComponent],
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': true}}]
    }),
  )
  .add('Bulbassaur', () => ({
    component: CardComponent,
    props: {pokemon: new Pokemon(1, 'Bulbassaur')}
  }));

storiesOf('PokeCard', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent, FeatureToggleDirective, PokemonSpriteComponent],
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': false}}]
    }),
  )
  .add('Pikachu', () => ({
    component: CardComponent,
    props: {pokemon: new Pokemon(25, 'Pikachu')}
  }));
