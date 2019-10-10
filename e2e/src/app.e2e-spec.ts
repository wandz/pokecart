import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('shows the pokemons available to adoption', () => {
    it('displays 20 pokemons when the home page is loaded', () => {
      page.navigateTo();
      expect(page.getTotalOfPokemons()).toEqual(20);
    });

    it('displays bulbasaur as the first pokemon', () => {
      page.navigateTo();
      expect(page.getFirstPokemonName()).toEqual('bulbasaur');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
