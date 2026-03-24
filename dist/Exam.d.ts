import { Answer } from "./Answer.js";
import { Weight } from "./Weight.js";
export declare class Exam {
    private answer;
    private weight;
    private exams;
    constructor(answer: Answer, weight: Weight);
    get pesos(): number[];
    get gabarito(): string[];
    add(exam: Answer): void;
    avg(): number;
    min(numero: number): number[];
    max(numero: number): number[];
    lt(limite: number): number[];
    gt(limite: number): number[];
}
//# sourceMappingURL=Exam.d.ts.map