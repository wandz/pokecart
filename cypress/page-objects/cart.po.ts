export class CartPage {
  url() {
    return 'http://localhost:4200/cart';
  }

  getPokemonItem(pokemonName: string) {
    return cy.contains(pokemonName).parent();
  }
}

