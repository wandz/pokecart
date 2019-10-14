import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Cart } from '../models/cart.model';
import { Pokemon } from '../models/pokemon.model';

describe('CartService', () => {
  let service: CartService;
  let subscriptionSpy: jest.Mock;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(CartService);
    subscriptionSpy = jest.fn();
    service.subscribe(subscriptionSpy);
  });

  it('subscribes with a blank cart', () => {
    expect(subscriptionSpy).toBeCalledWith(new Cart());
  });

  it('adds a pokemon to the cart', () => {
    const pokemon = new Pokemon(1, 'Bulbassaur');
    service.addPokemon(pokemon);

    const expectedCart = new Cart();
    expectedCart.addPokemon(pokemon);

    expect(subscriptionSpy).toBeCalledWith(expectedCart);
  });
});
