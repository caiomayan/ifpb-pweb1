import { Answer } from "./Answer.js";
import { Exam } from "./Exam.js";
import { Weight } from "./Weight.js";
// Cadastro do exame
const pesos = new Weight([2, 2, 2, 2, 2]);
const gabarito = new Answer("Gabarito", ["a", "b", "a", "d", "c"]);
const prova = new Exam(gabarito, pesos);
// Cadastro das provas dos alunos
const provaCaio = new Answer("Caio", ["a", "b", "c", "a", "b"]);
const provaSerafim = new Answer("Serafim", ["c", "a", "d", "a", "c"]);
const provaDouglas = new Answer("Douglas", ["a", "b", "a", "d", "c"]);
// Adição das provas no exame
prova.add(provaCaio); // No ato de adicionar a prova do aluno no exame, a nota será calculada e obtida
prova.add(provaSerafim);
prova.add(provaDouglas);
// Testes de saída
console.log("Peso das questões da prova: " + prova.pesos);
console.log("Gabarito da prova: " + prova.gabarito);
console.log();
console.log("Média de notas do exame: " + prova.avg());
console.log("Exibir as duas menores notas da prova: " + prova.min(2));
console.log("Exibir a maior nota da prova: " + prova.max(1));
console.log("Notas menores que 4: " + prova.lt(4));
console.log("Notas maiores que 6: " + prova.gt(6));
//# sourceMappingURL=index.js.map