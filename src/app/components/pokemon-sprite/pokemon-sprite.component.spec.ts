import {render} from '@testing-library/angular';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonSpriteComponent} from './pokemon-sprite.component';

describe('PokemonSpriteComponent', () => {
  it('renders the pokemon image', async () => {
    const pokemon = new Pokemon(1, 'Bulbassaur');
    const component = await render(PokemonSpriteComponent, {
      componentProperties: { pokemon }
    });

    expect(component.queryByAltText('Bulbassaur Sprite')).not.toBeNull();
  });
});
