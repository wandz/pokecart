import { CardListComponent } from './card-list.component';
import { Pokemon } from '../../models/pokemon.model';
import { render } from '@testing-library/angular';
import { CardComponent } from '../card/card.component';

describe('CardListComponent', () => {
  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    const pidgey = new Pokemon(16, 'Pidgey');
    const pokemons = [pokemon, pidgey];
    const component = await render(CardListComponent, {
      componentProperties: {pokemons},
      declarations: [ CardComponent ]
    });

    expect(component.getByText('Pikachu')).toBeTruthy();
    expect(component.getByText('Pidgey')).toBeTruthy();
  });
});
