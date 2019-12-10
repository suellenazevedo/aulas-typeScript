class CarroEx{

//atributos

    Cor: string;

    private Id: number = 130119;

    Modelo: string;

    Ano: number;

    Marca: string;

//metodos

    ligar(){
        console.log("ligando o possante");
    }

    acelerar(){
        console.log("acelerando o possante");
    }

    frear(){
        console.log("brecando o possante");
    }

    desligar(){
        console.log("deixando o possante descansar");
    }
    verId(){
        console.log(this.Id);
    }
}


var possante = new CarroEx();

possante.Cor = "Branca";
possante.Ano = 2018;
possante.Modelo = "Urus";
possante.Marca = "Lamborghini"

