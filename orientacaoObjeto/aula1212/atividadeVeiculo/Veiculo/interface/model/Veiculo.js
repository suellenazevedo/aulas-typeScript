"use strict";
exports.__esModule = true;
//Criando e exportando a classe 'Veiculo' para acessa-la nas classes filhas
var Veiculo = /** @class */ (function () {
    //Get e Set dos atributos(Não estão pegando tão bem, por isso estão comentados)
    // public get cor(): string {
    //     return this._cor;
    // }
    // public set cor(v: string) {
    //     this._cor = v;
    // }
    // public get marca(): string {
    //     return this._marca;
    // }
    // public set marca(v: string) {
    //     this._marca = v;
    // }
    // public get modelo(): string {
    //     return this._modelo;
    // }
    // public set modelo(value: string) {
    //     this._modelo = value;
    // }
    //Construtor dos atributos
    function Veiculo(marca, modelo, cor) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }
    //Métodos da classe
    Veiculo.prototype.ligar = function () {
        console.log("Ligando veiculo.");
    };
    Veiculo.prototype.acelerar = function () {
        console.log("Acelerando veiculo.");
    };
    Veiculo.prototype.desligar = function () {
        console.log("Desligando veiculo.");
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
