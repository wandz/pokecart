import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('shows the pokemons available to adoption', () => {
    it('displays 20 pokemons when the home page is loaded', async () => {
      await page.navigateTo();
      expect(await page.getTotalOfPokemons()).toEqual(20);
    });

    it('displays bulbasaur as the first pokemon', async () => {
      await page.navigateTo();
      expect(await page.getFirstPokemonName()).toEqual('bulbasaur');
    });
  });
});
