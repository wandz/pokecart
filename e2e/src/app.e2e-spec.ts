import {AppPage} from './app.po';
import {Page500} from './page500.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('shows the pokemons available to adoption', () => {
    it('displays 20 pokemons when the home page is loaded', async () => {
      await page.navigateTo();
      await page.isLoaded();
      expect(await page.getTotalOfPokemons()).toEqual(20);
    });

    it('displays bulbasaur as the first pokemon', async () => {
      await page.navigateTo();
      await page.isLoaded();
      expect(await page.getFirstPokemonName()).toEqual('bulbasaur');
    });
  });

  describe('api is not responding', () => {
    it('displays error 500 page', async () => {
      page.withPokeApiError();
      await page.navigateTo();
      const page500 = new Page500();
      expect(await page500.isInPage());
    });
  });
});
