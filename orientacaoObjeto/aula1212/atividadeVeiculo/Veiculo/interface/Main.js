"use strict";
exports.__esModule = true;
//Importando as classes filhas 
var Moto_1 = require("./model/Moto");
var Carro_1 = require("./model/Carro");
//Criando objeto do tipo 'Carro'
var carro = new Carro_1.Carro("Chevrolet", "Camaro SS", "Azul");
//Chamando os métodos da classe
carro.ligar();
carro.acelerar();
carro.trocaMarcha();
carro.frear();
carro.desligar();
//Criando objeto do tipo 'Moto'
var moto = new Moto_1.Moto("Chevrolet", "Camaro SS", "Azul");
//Chamando os métodos da classe
moto.ligar();
moto.acelerar();
moto.trocaMarcha();
moto.frear();
moto.desligar();
