export class Mamifero{
    
    private _Pelo : boolean;
    
    private _Placentario : boolean;

    public get Pelo() : boolean {
        return this._Pelo;
    }
    public set Pelo(v : boolean) {
        this._Pelo = v;
    }
    
    public get Placentario() : boolean {
        return this._Placentario;
    }
    public set Placentario(v : boolean) {
        this._Placentario = v;
    }

    mover(){
        console.log("Animal se movendo...")
    }

    comer(){
        console.log("Animal comendo...")
    }

    gerarCria(){
        if(this.Placentario){
            console.log("Parindo...") 
        }else{
            console.log("Infertil...") 
        }
    }
}