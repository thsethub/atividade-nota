var entrada = require("readline-sync");

var aleatorio = Math.floor(Math.random() * 100);
console.log("Um número aleatório entre 0 e 100 foi gerado!");

var numero = parseInt(entrada.question("Adivinhe o número: "));

while(numero != aleatorio) {
    if(numero > aleatorio) {
        console.log("O número que você digitou é maior que o número aleatório.");
    } else {
        console.log("O número que você digitou é menor que o número aleatório.");
    }
    numero = parseInt(entrada.question("Tente novamente: "));
}

console.log("Parabéns! Você adivinhou o número.");