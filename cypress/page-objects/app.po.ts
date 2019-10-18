import {CartPage} from './cart.po';

export class HomePage {
  async navigateTo() {
    cy.visit('http://localhost:4200/');
  }

  getTotalOfPokemons() {
    return cy.get('poke-card').its('length');
  }

  getFirstPokemonName() {
    return cy.get('poke-card:first-child h1').invoke('text');
  }

  getPokemonsAdoptedCount() {
    return cy.get('.pokecartcount span').invoke('text');
  }

  adoptPokemon(pokemonName: string) {
    return cy
      .contains(pokemonName)
      .parent()
      .contains('Adotar')
      .click();
  }

  clickAdoptBulbasaur() {
    return this.adoptPokemon('bulbasaur');
  }

  goToCart(): CartPage {
    cy.get('[alt="Ir pro carrinho"]').click();

    return new CartPage();
  }

  withPokeApiError() {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      status: 500,
      response: []
    }).as('pokeError');
  }
}

