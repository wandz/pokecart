import { CardComponent } from './card.component';
import { render } from '@testing-library/angular';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('CardComponent', () => {

  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    const component = await render(CardComponent, {
      componentProperties: { pokemon }
    });
    expect(component.getByText('Pikachu')).toBeTruthy();
  });

  it('has a sprite with alt text', async () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      componentProperties: {pokemon}
    });

    expect(component.getByAltText('Bulbasauro sprite')).not.toBeNull();
  });
});
