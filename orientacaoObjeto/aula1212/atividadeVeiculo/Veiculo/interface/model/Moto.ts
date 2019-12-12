import { ITrocaMarcha } from '../ITrocaMarcha';


//Importando a classe 'Veiculo' para uma classe filha
import { Veiculo } from './Veiculo';

//Criando e exportando a classe 'Moto' para acessa-la no 'Main' com um objeto
export class Moto extends Veiculo implements ITrocaMarcha {


    ligar() {
        console.log("Ligando a motoquinha");
    }

    acelerar() {
        console.log("acelerando a motoquinha");
    }

    trocaMarcha() {
        console.log("Aperto a embreagem com a mão");
        console.log("Passo a marcha");
    }

    empinar() {
        console.log("Empinando a motoquinha");
    }

    frear() {
        console.log("Aperto o freio com a mão");
        console.log("A moto para");
    }

    desligar() {
        console.log("Desligando a motoquinha");
    }

}