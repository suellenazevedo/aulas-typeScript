function hello() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return "Hello, " + nome;
}
var varNome = "world";
console.log(hello(varNome));
