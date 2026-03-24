import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";

export class Exam {
  private answer: Answer;
  private weight: Weight;
  private exams: Array<Answer>;

  constructor(answer: Answer, weight: Weight) {
    this.answer = answer;
    this.weight = weight;
    this.exams = [];
  }

  get pesos(): number[] {
    return this.weight.points;
  }

  get gabarito(): string[] {
    return this.answer.gabarito;
  }

  public add(exam: Answer): void {
    let nota: number = 0;
    for (let i: number = 0; i < exam.gabarito.length; i++) {
      const peso = this.weight.points[i];
      if (exam.gabarito[i] === this.answer.gabarito[i] && peso !== undefined) {
        nota += peso;
      }
    }

    exam.notaAluno = nota;

    this.exams.push(exam);
  }

  public avg(): number {
    if (this.exams.length === 0) {
      return 0;
    }

    let soma = 0;
    this.exams.forEach((resposta) => {
      soma += resposta.notaAluno;
    });

    let resultado: number = Number((soma / this.exams.length).toFixed(2));

    return resultado;
  }

  public min(numero: number): number[] {
    const minNotas: number[] = this.exams
      .map((aluno) => aluno.notaAluno)
      .sort((a, b) => a - b)
      .slice(0, numero);

    return minNotas;
  }

  public max(numero: number): number[] {
    const maxNotas: number[] = this.exams
      .map((aluno) => aluno.notaAluno)
      .sort((a, b) => b - a)
      .slice(0, numero);

    return maxNotas;
  }

  public lt(limite: number): number[] {
    const menoresNotas: number[] = [];
    this.exams.forEach((aluno) => {
      if (limite > aluno.notaAluno) {
        menoresNotas.push(aluno.notaAluno);
      }
    });
    return menoresNotas;
  }

  public gt(limite: number): number[] {
    const maioresNotas: number[] = [];
    this.exams.forEach((aluno) => {
      if (limite < aluno.notaAluno) {
        maioresNotas.push(aluno.notaAluno);
      }
    });
    return maioresNotas;
  }
}
