import {CartPage} from './cart.po';

export class AppPage {
  async navigateTo() {
    await page.goto('http://localhost:4200/');
  }

  async isLoaded() {
    await page.waitForSelector('poke-card');
  }

  getTotalOfPokemons() {
    return page.evaluate(() =>
      document.getElementsByTagName('poke-card').length);
  }

  getFirstPokemonName() {
    return page.evaluate(() =>
      document.querySelector('poke-card:first-child h1').textContent);
  }

  getPokemonsAdoptedCount() {
    return page.evaluate(() =>
      document.querySelector('.pokecartcount span').textContent);
  }

  adoptPokemon(pokemonName: string) {
    return page.evaluate((pokemonNameBrowser: string) => {
      Array.from(document.querySelectorAll('h1'))
        .filter((element) => element.textContent === pokemonNameBrowser)[0]
        .parentElement
        .querySelector('button')
        .click();
    }, pokemonName);
  }

  clickAdoptButton() {
    return page.click('poke-card:first-child button');
  }

  async goToCart(): Promise<CartPage> {
    await page.click('[alt="Ir pro carrinho"]');

    return new CartPage();
  }

  withPokeApiError() {
    page.setRequestInterception(true);
    page.on('request', request => {
      if (request.url() === 'https://pokeapi.co/api/v2/pokemon/') {
        request.abort();
      } else {
        request.continue();
      }
    });
  }
}

