import { AdoptComponent } from './adopt.component';
import { Pokemon } from '../../models/pokemon.model';
import { render } from '@testing-library/angular';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of, throwError } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective } from '../../directives/feature-toggle.directive';
import { CartCountComponent } from '../../components/cart-count/cart-count.component';
import {PokemonSpriteComponent} from 'src/app/components/pokemon-sprite/pokemon-sprite.component';
import {withFeatureToggle} from 'testUtils';

const pokemon = new Pokemon(1, 'Pikachu');
const pidgey = new Pokemon(16, 'Pidgey');
const pokemons = [pokemon, pidgey];

class MockPokemonService {
  constructor(private serviceResponse: Observable<Pokemon[]>) {
  }

  getAll(): Observable<Pokemon[]> {
    return this.serviceResponse;
  }
}

describe('AdoptComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardComponent, CardListComponent, CartCountComponent, FeatureToggleDirective, PokemonSpriteComponent],
      providers: [{provide: PokemonService, useValue: new MockPokemonService(of(pokemons))}]
    });
  });

  it('renders a pokemon list', async () => {
    const component = await render(AdoptComponent);

    expect(component.getByText('Pikachu')).toBeTruthy();
    expect(component.getByText('Pidgey')).toBeTruthy();
  });

  it('redirects to 500 error page given a service error', async () => {
    const navigateMock = jest.fn();

    await render(AdoptComponent, {
      providers: [
        {
          provide: PokemonService, useValue: new MockPokemonService(throwError(new Error('unable to reach the server')))
        },
        {
        provide: Router, useValue: {navigate: navigateMock}
      }]
    });

    expect(navigateMock).toBeCalledWith(['500']);
  });

  it('renders a pokemon list', async () => {
    const component = await render(AdoptComponent);

    expect(component.queryByText('0')).toBeNull();
  });

  it('renders a pokemon list', async () => {
    withFeatureToggle(['show-cartcount']);
    const component = await render(AdoptComponent);

    expect(component.queryByText('0')).not.toBeNull();
  });

});
