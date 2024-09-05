const PromptSync = require("prompt-sync");
const Prompt = PromptSync();

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class Estudante extends Pessoa {
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar(): void {
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
}

class Professor extends Pessoa {
    disciplina: string;

    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    ensinar(): void {
        console.log(`${this.nome} está ensinando ${this.disciplina}.`);
    }
}

const nome: string = Prompt("Informe seu nome: ");
const idade: number = Number(Prompt("Informe sua idade: "));
const disciplina: string = Prompt("Informe sua disciplina: ");

const professor = new Professor(nome, idade, disciplina);
professor.apresentar();
professor.ensinar();