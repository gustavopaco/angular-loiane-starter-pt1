var minhaVar = "minha variavel";

function minhaFunc(x : any ,y : any) {
  return x + y;
}

/* ECMA 6 SCRIPT 2015 */
let numero = 2;
const PI = 3.14;


let numeros = [1,2,3];

numeros.map(function (valor) {
  return valor * 2;
})

numeros.map(valor => valor * 2) /* ES 6 2015*/

class Matematica {
  soma(x : any , y : any) {
    return x + y;
  }
}
