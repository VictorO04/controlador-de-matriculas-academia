const alunosMatriculados = [];

export default class Matricula {
    matricularAluno(nome, idade) {
        const nomeFormatado = nome.trim();

        if (nomeFormatado === "") {
            throw new Error("Nome inválido: não pode ser vazio");
        }

        if (Number.isNaN(idade) || typeof idade !== "number") {
            throw new Error("Idade inválida: informe um número");
        }

        if (!Number.isInteger(idade)) {
            throw new Error("Idade inválida: informe número inteiro");
        }

        if (idade < 12 || idade > 100) {
            throw new Error("Idade fora da faixa permitida (12 a 100 anos)");
        }

        const alunoNovo = { nome: nomeFormatado, idade };

        alunosMatriculados.push(alunoNovo);

        return "Aluno cadastrado com sucesso!";
    }
}
