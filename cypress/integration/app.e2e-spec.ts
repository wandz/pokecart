import {HomePage} from '../page-objects/app.po';
import {Page500} from '../page-objects/page500.po';
import {CartPage} from '../page-objects/cart.po';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  describe('shows the pokemons available to adoption', () => {
    it('displays 20 pokemons when the home page is loaded', () => {
      page.navigateTo();
      page.getTotalOfPokemons().should('equal', 20);
    });

    it('displays bulbasaur as the first pokemon', () => {
      page.navigateTo();

      page.getFirstPokemonName().should('equal', 'bulbasaur');
    });

    it('goes to cart page', () => {
      page.navigateTo();
      const cartPage = page.goToCart();

      const url = cartPage.url();
      cy.url().should('eq', url);
    });
  });

  describe('adopting pokemons', () => {
    it('shows adopted pokemons on cart page by navigation', () => {
      page.navigateTo();

      page.adoptPokemon('charmeleon');
      page.adoptPokemon('butterfree');

      const cartPage = page.goToCart();

      cartPage.getPokemonItem('charmeleon').should('exist');
      cartPage.getPokemonItem('butterfree').should('exist');
    });

    it('shows adopted pokemons on cart page by URL', () => {
      page.navigateTo();

      page.adoptPokemon('charmeleon');
      page.adoptPokemon('butterfree');

      const cartPage = new CartPage();
      cartPage.navigateTo();

      cartPage.getPokemonItem('charmeleon').should('exist');
      cartPage.getPokemonItem('butterfree').should('exist');
    });
  });

  describe('shows pokemon count', () => {
    it('display 1 pokemons in cart when home page is loaded', () => {
      page.navigateTo();
      page.clickAdoptBulbasaur();

      page.getPokemonsAdoptedCount().should('equal', '1');
    });
  });

  describe('api is not responding', () => {
    it('displays error 500 page', () => {
      page.withPokeApiError();
      page.navigateTo();
      const page500 = new Page500();
      cy.wait('@pokeError');
      cy.url().should('equal', page500.url());
    });
  });
});
