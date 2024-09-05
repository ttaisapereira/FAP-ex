var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos."));
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, idade, curso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.curso = curso;
        return _this;
    }
    Estudante.prototype.estudar = function () {
        console.log("".concat(this.nome, " est\u00E1 estudando ").concat(this.curso, "."));
    };
    return Estudante;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, idade, disciplina) {
        var _this = _super.call(this, nome, idade) || this;
        _this.disciplina = disciplina;
        return _this;
    }
    Professor.prototype.ensinar = function () {
        console.log("".concat(this.nome, " est\u00E1 ensinando ").concat(this.disciplina, "."));
    };
    return Professor;
}(Pessoa));
// Testando as classes
var PromptSync = require("prompt-sync");
var userPrompt = PromptSync();
var nome = userPrompt("Informe seu nome: ");
var idade = Number(userPrompt("Informe sua idade: "));
var disciplina = userPrompt("Informe sua disciplina: ");
var professor = new Professor(nome, idade, disciplina);
professor.apresentar();
professor.ensinar();
