import { Pokemon } from '../src/app/models/pokemon.model';
import { Cart } from '../src/app/models/cart.model';

const bulbassaur = new Pokemon(1, 'Bulbassaur');
const pidgey = new Pokemon(16, 'Pidgey');

const cart = new Cart();

cart.addPokemon((bulbassaur));
cart.addPokemon(pidgey);

const PokemonMocks = {bulbassaur, pidgey, cart};

export default PokemonMocks;
