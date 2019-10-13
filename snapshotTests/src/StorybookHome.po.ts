import {Story} from './Story.po';

export class StorybookHome {
  public async navigateTo() {
    await page.goto('http://localhost:6006/');
    await page.waitFor(() => document.querySelectorAll('.simplebar-content a[href*="path"]').length > 2);
  }

  public async getAllStories() {
    const listLink = await page.evaluate(() => {
      const sidebar = document.getElementsByClassName('simplebar-content')[0];

      return Array.from(sidebar.querySelectorAll('a[href*="path"]'), (link: any) => ({
        href: link.href,
        id: link.id,
      }));
    });

    return listLink.map((link) => this.createStoryFrom(link));
  }

  private createStoryFrom(link) {
    const title = link.id.replace('explorer', '').replace('--', '-view-');
    const url = link.href.split('/story/')[1];

    return new Story(title, url);
  }
}
