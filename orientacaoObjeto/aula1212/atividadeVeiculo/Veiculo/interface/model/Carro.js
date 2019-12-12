"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Importando a classe 'Veiculo' para uma das classes filhas
var Veiculo_1 = require("./Veiculo");
//Criando e exportando a classe 'Carro' para acessa-la no 'Main' com um objeto
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Métodos da classe Carro
    Carro.prototype.ligar = function () {
        console.log("Ligando meu possante");
    };
    Carro.prototype.acelerar = function () {
        console.log("Pisando fundo com meu possante");
    };
    Carro.prototype.trocaMarcha = function () {
        console.log("Piso na embreagem");
        console.log("Passo a marcha");
    };
    Carro.prototype.frear = function () {
        console.log("Piso no freio");
        console.log("O carro para");
    };
    Carro.prototype.desligar = function () {
        console.log("Desligando para o possante descansar um pouco");
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
