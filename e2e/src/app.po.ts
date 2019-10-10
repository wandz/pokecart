import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTotalOfPokemons() {
    return element.all(by.tagName('poke-card')).count() as Promise<number>;
  }

  getFirstPokemonName() {
    return element(by.css('poke-card:first-child')).getText() as Promise<string>;
  }
}
