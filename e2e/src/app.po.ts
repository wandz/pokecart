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

  clickAdoptButton() {
    return page.click('poke-card:first-child button');
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

