import { CardComponent } from 'src/app/components/card/card.component';
import { Pokemon } from 'src/app/models/pokemon.model';
import {moduleMetadata, storiesOf} from '@storybook/angular';

storiesOf('PokeCard', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent]
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
