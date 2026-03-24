export class Answer {
  private name: string;
  private answers: string[];
  private nota: number;

  constructor(name: string, answers: string[]) {
    this.name = name;
    this.answers = answers;
    this.nota = 0;
  }

  get nomeAluno(): string {
    return this.name;
  }

  get gabarito(): string[] {
    return this.answers;
  }

  get notaAluno(): number {
    return this.nota;
  }

  set notaAluno(numero: number) {
    this.nota = numero;
  }
}
