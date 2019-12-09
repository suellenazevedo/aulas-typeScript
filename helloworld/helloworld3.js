function hello() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    var r = "";
    nome.forEach(function (e) {
        r += e;
    });
    return r;
}
var varNome = hello("PS1, ", "PS2, ", "PS3 e", " PS4");
console.log(hello(varNome));
