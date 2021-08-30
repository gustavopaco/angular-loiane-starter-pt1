var minhaVar = "minha variavel";
function minhaFunc(x, y) {
    return x + y;
}
/* ECMA 6 SCRIPT 2015 */
var numero = 2;
var PI = 3.14;
var numeros = [1, 2, 3];

numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); /* ES 6 2015*/


var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
