import { AdoptComponent } from './adopt.component';
import { Pokemon } from '../../models/pokemon.model';
import { render } from '@testing-library/angular';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';

const pokemon = new Pokemon(1, 'Pikachu');
const pidgey = new Pokemon(16, 'Pidgey');
const pokemons = [pokemon, pidgey];

class MockPokemonService {
  getAll(): Observable<Pokemon[]> {
    return of(pokemons);
  }
}

describe('AdoptComponent', () => {
  it('renders a pokemon list', async () => {
    const component = await render(AdoptComponent, {
      declarations: [ CardComponent, CardListComponent ],
      providers: [ {provide: PokemonService, useClass: MockPokemonService } ]
    });

    expect(component.getByText('Pikachu')).toBeTruthy();
    expect(component.getByText('Pidgey')).toBeTruthy();
  });
});
