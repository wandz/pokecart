
export class AppPage {
  async navigateTo() {
    await page.goto('http://localhost:4200/');
  }

  async isLoaded() {
    await page.waitForSelector('poke-card');
  }

  getTotalOfPokemons() {
    return page.evaluate(() =>
      document.getElementsByTagName('poke-card').length );
  }

  getFirstPokemonName() {
    return page.evaluate(() =>
      document.querySelector('poke-card:first-child h1').textContent);
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

