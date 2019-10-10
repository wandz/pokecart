describe('PokeCard', () => {
  it('visually looks correct', async () => {
    await page.goto('http://localhost:6006/iframe.html?id=pokecard--card&viewMode=story');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
