import {storiesOf} from '@storybook/angular';
import {PokemonSpriteComponent} from '../app/components/pokemon-sprite/pokemon-sprite.component';
import {Pokemon} from '../app/models/pokemon.model';

const pokemon = new Pokemon(1, 'Bulbasauro');

storiesOf('PokePokemonSprite', module)
  .add('default', () => ({
    component: PokemonSpriteComponent,
    props: {pokemon}
  }));
