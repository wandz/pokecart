export class CartPage {
  url() {
    return 'http://localhost:4200/cart';
  }

  navigateTo() {
    cy.visit(this.url());
  }

  getPokemonItem(pokemonName: string) {
    return cy.contains(pokemonName).parent();
  }
}

