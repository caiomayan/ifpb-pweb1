import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";
export class Exam {
    answer;
    weight;
    exams;
    constructor(answer, weight) {
        this.answer = answer;
        this.weight = weight;
        this.exams = [];
    }
    get pesos() {
        return this.weight.points;
    }
    get gabarito() {
        return this.answer.gabarito;
    }
    add(exam) {
        let nota = 0;
        for (let i = 0; i < exam.gabarito.length; i++) {
            const peso = this.weight.points[i];
            if (exam.gabarito[i] === this.answer.gabarito[i] && peso !== undefined) {
                nota += peso;
            }
        }
        exam.notaAluno = nota;
        this.exams.push(exam);
    }
    avg() {
        if (this.exams.length === 0) {
            return 0;
        }
        let soma = 0;
        this.exams.forEach((resposta) => {
            soma += resposta.notaAluno;
        });
        let resultado = Number((soma / this.exams.length).toFixed(2));
        return resultado;
    }
    min(numero) {
        const minNotas = this.exams
            .map((aluno) => aluno.notaAluno)
            .sort((a, b) => a - b)
            .slice(0, numero);
        return minNotas;
    }
    max(numero) {
        const maxNotas = this.exams
            .map((aluno) => aluno.notaAluno)
            .sort((a, b) => b - a)
            .slice(0, numero);
        return maxNotas;
    }
    lt(limite) {
        const menoresNotas = [];
        this.exams.forEach((aluno) => {
            if (limite > aluno.notaAluno) {
                menoresNotas.push(aluno.notaAluno);
            }
        });
        return menoresNotas;
    }
    gt(limite) {
        const maioresNotas = [];
        this.exams.forEach((aluno) => {
            if (limite < aluno.notaAluno) {
                maioresNotas.push(aluno.notaAluno);
            }
        });
        return maioresNotas;
    }
}
//# sourceMappingURL=Exam.js.map