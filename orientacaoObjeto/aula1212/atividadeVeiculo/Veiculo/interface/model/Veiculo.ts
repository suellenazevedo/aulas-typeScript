//Criando e exportando a classe 'Veiculo' para acessa-la nas classes filhas
export class Veiculo {

    //Atributos da classe 
    private _marca: string;
    private _modelo: string;
    private _cor: string;
    

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
    constructor(marca:string, modelo:string, cor:string){
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }



    //Métodos da classe

    ligar() {
        console.log("Ligando veiculo.")
    }

    acelerar(){
        console.log("Acelerando veiculo.")
    }

    desligar(){
        console.log("Desligando veiculo.")
    }










}