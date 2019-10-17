export class CartPage {
  async isInPage() {
    return page.waitForSelector('poke-cart');
  }
}

