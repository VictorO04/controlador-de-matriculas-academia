import Matricula from "../src/matricula";

describe("Matricula", () => {
    const matricula = new Matricula;

    it("Deve cadastrar aluno com idade entre 12 e 100", () => {
        expect(matricula.matricularAluno("Victor", 100)).toBe("Aluno cadastrado com sucesso!");
    });

    it("Deve bloquear cadastrado de aluno com idade tipo diferente de number", () => {
        expect(() => matricula.matricularAluno("Victor", undefined)).toThrow("Idade inválida: informe um número",
        );
    });

    it("Deve bloquear cadastro de aluno com idade em decimal", () => {
        expect(() => matricula.matricularAluno("Victor", 99.9)).toThrow("Idade inválida: informe número inteiro",);
    });

    it("Deve bloquear cadastro de aluno que está com a idade fora da faixa permitida", () => {
        expect(() => matricula.matricularAluno("Victor", 11)).toThrow("Idade fora da faixa permitida (12 a 100 anos)");
    });

    it("Deve bloquear cadastro de aluno com nome vazio", () => {
        expect(() => matricula.matricularAluno("", 17)).toThrow("Nome inválido: não pode ser vazio");
    });
});
