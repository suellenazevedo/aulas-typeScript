//Importando as classes filhas 
import { Moto } from './model/Moto';
import { Carro } from './model/Carro';

//Criando objeto do tipo 'Carro'
var carro = new Carro("Chevrolet","Camaro SS", "Azul");

//Chamando os métodos da classe
carro.ligar();
carro.acelerar();
carro.trocaMarcha();
carro.frear();
carro.desligar();


//Criando objeto do tipo 'Moto'
var moto = new Moto("Chevrolet","Camaro SS", "Azul");

//Chamando os métodos da classe
moto.ligar();
moto.acelerar();
moto.trocaMarcha();
moto.frear();
moto.desligar();

