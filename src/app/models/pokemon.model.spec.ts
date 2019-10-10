import {Pokemon} from './pokemon.model';


describe('Pokemon', () => {
  it('Gets a pokemon sprite', () => {
    const bulbasaur = new Pokemon(1, 'bulbasaur');

    const sprite = bulbasaur.getSprite();
    expect(sprite).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
  });
});
