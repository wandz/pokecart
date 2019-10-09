import { CardComponent } from './card.component';
import { render } from '@testing-library/angular';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('CardComponent', () => {

  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon('Pikachu');
    const component = await render(CardComponent, {
      componentProperties: { pokemon }
    });
    expect(component.getByText('Pikachu')).toBeTruthy();
  });
});
