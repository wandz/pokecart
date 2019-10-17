import {render} from '@testing-library/angular';
import {CartCountComponent} from './cart-count.component';
import {CartService} from '../../services/cart.service';
import {Cart} from '../../models/cart.model';
import PokemonMocks from '../../../../mocks/pokemon.mocks';
import {TestBed} from '@angular/core/testing';

describe('CartCountComponent', () => {
  beforeEach(() => {
    const cart = new Cart();
    cart.addPokemon(PokemonMocks.bulbassaur);

    const fakeCartService = {
      subscribe: (callback) => {
        callback(cart);
      }
    };

    TestBed.configureTestingModule({
      providers: [{provide: CartService, useValue: fakeCartService}]
    });
  });

  it('shows count of pokemon', async () => {
    const component = await render(CartCountComponent, {});

    expect(component.queryByText('1')).not.toBeNull();
  });
})
;
