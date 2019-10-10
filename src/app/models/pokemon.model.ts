export class Pokemon {
  constructor(public readonly id: number, public readonly name: string) {
  }

  getSprite() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }
}
