function hello(...PSX: string[]): string {
    let r : string = "";
    PSX.forEach(e => {
        r+=e;
    });

    return r;
}

var varPSX = hello("PS1, ", "PS2, ", "PS3 e", " PS4")

console.log(hello(varNome));