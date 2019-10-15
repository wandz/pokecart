import { CardComponent } from 'src/app/components/card/card.component';
import { Pokemon } from 'src/app/models/pokemon.model';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective} from '../app/directives/feature-toggle.directive';

storiesOf('PokeCard', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent, FeatureToggleDirective],
      providers: [{provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {}}]
    }),
  )
  .add('Bulbassaur', () => ({
    component: CardComponent,
    props: { pokemon: new Pokemon(1, 'Bulbassaur') }
  }))
  .add('Pikachu', () => ({
    component: CardComponent,
    props: { pokemon: new Pokemon(25, 'Pikachu') }
  }));
