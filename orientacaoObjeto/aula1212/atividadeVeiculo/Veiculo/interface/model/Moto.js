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
//Importando a classe 'Veiculo' para uma classe filha
var Veiculo_1 = require("./Veiculo");
//Criando e exportando a classe 'Moto' para acessa-la no 'Main' com um objeto
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.ligar = function () {
        console.log("Ligando a motoquinha");
    };
    Moto.prototype.acelerar = function () {
        console.log("acelerando a motoquinha");
    };
    Moto.prototype.trocaMarcha = function () {
        console.log("Aperto a embreagem com a mão");
        console.log("Passo a marcha");
    };
    Moto.prototype.empinar = function () {
        console.log("Empinando a motoquinha");
    };
    Moto.prototype.frear = function () {
        console.log("Aperto o freio com a mão");
        console.log("A moto para");
    };
    Moto.prototype.desligar = function () {
        console.log("Desligando a motoquinha");
    };
    return Moto;
}(Veiculo_1.Veiculo));
exports.Moto = Moto;
