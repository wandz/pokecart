import { Pokemon } from 'src/app/models/pokemon.model';
import { CardListComponent } from '../app/components/card-list/card-list.component';
import { CardComponent } from '../app/components/card/card.component';
import { moduleMetadata, storiesOf } from '@storybook/angular';

const pokemon = new Pokemon(1, 'Bulbasauro');
const Pidgiotte = new Pokemon(18, 'Pidgiotte');
const Pidgiotto = new Pokemon(17, 'Pidgiotto');
const pidgey = new Pokemon(16, 'Pidgey');
const pokemons = [pokemon, pidgey, Pidgiotto, Pidgiotte];

storiesOf('PokeCardList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CardComponent]
    }),
  )
  .add('default', () => ({
    component: CardListComponent,
    props: { pokemons }
  }));
