import { Pokemon } from 'src/app/models/pokemon.model';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CartService } from '../app/services/cart.service';
import { CartCountComponent } from '../app/components/cart-count/cart-count.component';
import { Cart } from '../app/models/cart.model';

const pokemon = new Pokemon(1, 'Bulbasauro');
const cart = new Cart();
cart.addPokemon((pokemon));

storiesOf('CartCount', module)
  .addDecorator(
    moduleMetadata({
      providers: [{
        provide: CartService, useValue: {
          subscribe: (callback) => {
            callback(cart);
          }
        }
      }]
    }),
  )
  .add('default', () => ({
    component: CartCountComponent,
    props: {}
  }));
