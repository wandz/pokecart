import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {Cart} from '../models/cart.model';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    const spy = jest.fn();
    service.subscribe(spy);
    expect(spy).toBeCalledWith(new Cart());
  });
});
