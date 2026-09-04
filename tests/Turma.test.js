import Turma from '../src/Turma';

describe("Turma", () => {
    let turma;

    beforeEach(() => {
        turma = new Turma(2);
    });

    afterEach(() => {
        turma = null;
    });

    it("Deve matricular um aluno", () => {
        expect(turma.matricular("Victor")).toBe(1);
    });

    it("Deve matricular dois alunos", () => {
        expect(turma.matricular("Victor")).toBe(1);
        expect(turma.matricular("Pedro")).toBe(2);
    });

    it("Deve bloquear matricula quando turma estiver cheia", () => {
        turma.matricular("Victor");
        turma.matricular("Pedro");

        expect(() => turma.matricular("João")).toThrow("Turma lotada");
    });
});
