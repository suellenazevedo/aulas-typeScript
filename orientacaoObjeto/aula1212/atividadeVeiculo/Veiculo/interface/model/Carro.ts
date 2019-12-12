import { ITrocaMarcha } from './../ITrocaMarcha';
//Importando a classe 'Veiculo' para uma das classes filhas
import { Veiculo } from './Veiculo';

//Criando e exportando a classe 'Carro' para acessa-la no 'Main' com um objeto
export class Carro extends Veiculo{

    //Métodos da classe Carro

    ligar() {
        console.log("Ligando meu possante")
    }

    acelerar(){
        console.log("Pisando fundo com meu possante")
    }
    trocaMarcha() {
        console.log("Piso na embreagem");
        console.log("Passo a marcha");
    }

    frear() {
        console.log("Piso no freio");
        console.log("O carro para");
    }

    desligar(){
        console.log("Desligando para o possante descansar um pouco")
    }

}
