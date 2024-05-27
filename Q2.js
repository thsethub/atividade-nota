var entrada = require("readline-sync");

function adicionar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function potenciacao(base, expoente) {
    return Math.pow(base, expoente);
}

function radiciacao(num) {
    return Math.sqrt(num);
}

var continuar = 'sim';
while(continuar.toLowerCase() == 'sim') {
    var operacao = entrada.question("Qual operação você deseja realizar? \n(+) Soma\n(-) Subtração\n(*) Multiplição\n(/) Divisão\n(^) Potenciação\n(sqrt) Extrair Raiz Quadrada\n:").toLowerCase();
    var num1 = parseInt(entrada.question("Digite um número: "));
    var num2 = operacao != 'sqrt' ? parseInt(entrada.question("Digite o segundo número: ")) : null;

    switch(operacao) {
        case '+':
            console.log("Resultado: " + adicionar(num1, num2));
            break;
        case '-':
            console.log("Resultado: " + subtrair(num1, num2));
            break;
        case '*':
            console.log("Resultado: " + multiplicar(num1, num2));
            break;
        case '/':
            console.log("Resultado: " + dividir(num1, num2));
            break;
        case '^':
            console.log("Resultado: " + potenciacao(num1, num2));
            break;
        case 'sqrt':
            console.log("Resultado: " + radiciacao(num1));
            break;
        default:
            console.log("Operação invalida.");
    }

    continuar = entrada.question("Deseja continuar? (sim/não): ");
}