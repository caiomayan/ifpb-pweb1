export class Weight {
  private Points: number[];

  constructor(Pesos: number[]) {
    this.Points = Pesos;
  }

  get points(): number[] {
    return this.Points;
  }
}
