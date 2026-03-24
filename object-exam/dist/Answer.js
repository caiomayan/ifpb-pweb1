export class Answer {
    name;
    answers;
    nota;
    constructor(name, answers) {
        this.name = name;
        this.answers = answers;
        this.nota = 0;
    }
    get nomeAluno() {
        return this.name;
    }
    get gabarito() {
        return this.answers;
    }
    get notaAluno() {
        return this.nota;
    }
    set notaAluno(numero) {
        this.nota = numero;
    }
}
//# sourceMappingURL=Answer.js.map