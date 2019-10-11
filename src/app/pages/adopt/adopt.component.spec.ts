import { AdoptComponent } from './adopt.component';
import { Pokemon } from '../../models/pokemon.model';
import { render } from '@testing-library/angular';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, of, throwError } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../app-routing.module';
import {Router} from '@angular/router';

const pokemon = new Pokemon(1, 'Pikachu');
const pidgey = new Pokemon(16, 'Pidgey');
const pokemons = [pokemon, pidgey];

class MockPokemonService {
  constructor(private serviceResponse: Observable<Pokemon[]>) {}

  getAll(): Observable<Pokemon[]> {
    return this.serviceResponse;
  }
}

describe('AdoptComponent', () => {
  it('renders a pokemon list', async () => {
    const component = await render(AdoptComponent, {
      declarations: [ CardComponent, CardListComponent ],
      imports: [ RouterTestingModule ],
      providers: [ {provide: PokemonService, useValue: new MockPokemonService(of(pokemons)) } ]
    });

    expect(component.getByText('Pikachu')).toBeTruthy();
    expect(component.getByText('Pidgey')).toBeTruthy();
  });

  it('redirects to 500 error page given a service error', async () => {
    const navigateMock = jest.fn();

    await render(AdoptComponent, {
      declarations: [ CardComponent, CardListComponent ],
      providers: [{
        provide: PokemonService, useValue: new MockPokemonService(throwError(new Error('unable to reach the server')))
      }, {
        provide: Router, useValue: {navigate: navigateMock}
      }]
    });

    expect(navigateMock).toBeCalledWith(['500']);
  });
});
