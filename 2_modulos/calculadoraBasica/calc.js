/**Importando modulos */
let somaFunc = require("./funcoes/soma");
let subFunc = require("./funcoes/sub");
let multFunc = require("./funcoes/mult")
let divFunc = require("./funcoes/div");


console.log("Soma " + somaFunc(2,2));
console.log("Subtracao " + subFunc(4,2));
console.log("Multiplicacao " + multFunc(4,2));
console.log("Divisao " + divFunc(8,2));
