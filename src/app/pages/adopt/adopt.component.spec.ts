import {AdoptComponent} from './adopt.component';
import {Pokemon} from '../../models/pokemon.model';
import {render} from '@testing-library/angular';
import {CardListComponent} from '../../components/card-list/card-list.component';
import {PokemonService} from '../../services/pokemon.service';
import {Observable, of} from 'rxjs';
import {CardComponent} from '../../components/card/card.component';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FeatureToggleDirective} from '../../directives/feature-toggle.directive';
import {CartCountComponent} from '../../components/cart-count/cart-count.component';
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
