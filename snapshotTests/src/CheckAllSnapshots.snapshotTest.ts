import {StorybookHome} from './StorybookHome.po';

describe('Check all snapshots', () => {
  describe('default state', () => {
    it('visually looks correct', async () => {
      const storyBook = new StorybookHome();
      await storyBook.navigateTo();
      const allStories = await storyBook.getAllStories();

      for (const story of allStories) {
        await story.navigateTo();
        const image = await story.screenshot();

        expect(image).toMatchImageSnapshot({ customSnapshotIdentifier: `default-state-of-${story.title}` });
      }
    });
  });
});
