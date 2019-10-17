export class CartPage {
  async isInPage() {
    return page.waitForSelector('poke-cart');
  }

  hasPokemon(pokemonName: string) {
    return page.evaluate((pokemonNameBrowser) => {
      return Array.from(document.querySelectorAll('.pokecartitem'))
        .some((cartItem) => cartItem.textContent === pokemonNameBrowser);
    }, pokemonName);
  }
}

