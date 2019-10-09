import { CardComponent } from 'src/app/components/card/card.component';
import { Pokemon } from 'src/app/models/pokemon.model';

export default {
  title: 'PokeCard',
};

const pokemon = new Pokemon('Bulbassaur');

export const Card = () => ({
  component: CardComponent,
  props: {
    pokemon
  },
});
