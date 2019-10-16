import { render } from '@testing-library/angular';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import PokemonMocks from '../../../../mocks/pokemon.mocks';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { TestBed } from '@angular/core/testing';
import { PokemonSpriteComponent } from '../../components/pokemon-sprite/pokemon-sprite.component';

describe('PokeCartComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent, PokemonSpriteComponent]
    });
  });
  it('renders a empty page when you dont have any pokemon in the cart', async () => {
    const component = await render(CartComponent, {
      providers: [{provide: CartService, useValue: {subscribe: (callback) => callback(new Cart())}}]
    });

    expect(component.queryByText('Carrinho vazio')).not.toBeNull();
  });

  it('renders a pokemons list in the cart', async () => {
    const component = await render(CartComponent, {
      providers: [{provide: CartService, useValue: {subscribe: (callback) => callback(PokemonMocks.cart)}}]
    });

    expect(component.queryByText('Bulbassaur')).not.toBeNull();
    expect(component.queryByText('Pidgey')).not.toBeNull();
  });
});
