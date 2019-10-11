
export class AppPage {
  async navigateTo() {
    await page.goto('http://localhost:4200/');
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
}

