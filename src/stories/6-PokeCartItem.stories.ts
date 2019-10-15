import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Pokemon} from '../app/models/pokemon.model';
import {CartItemComponent} from '../app/components/cart-item/cart-item.component';
import {PokemonSpriteComponent} from '../app/components/pokemon-sprite/pokemon-sprite.component';

const pokemon = new Pokemon(1, 'Bulbasauro');

storiesOf('PokeCartItem', module)
  .addDecorator(
    moduleMetadata({
      declarations: [PokemonSpriteComponent]
    }),
  )
  .add('default', () => ({
    component: CartItemComponent,
    props: {pokemon}
  }));
