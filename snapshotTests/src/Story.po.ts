export class Story {
  public constructor(public readonly title: string, private readonly id: string) {}

  public async navigateTo() {
    await page.goto(`http://localhost:6006/iframe.html?id=${this.id}`);
    await this.waitForImages();
  }

  public async screenshot() {
    return await page.screenshot();
  }

  private async waitForImages() {
    await page.waitFor(() => Array.from(document.images).every((image) => image.complete));
  }
}
