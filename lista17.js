var nome
var salario = 0
var percentualAumento = 0
var salarioComAumento = 0
var continuar = 0
while (continuar == 1) {
    dadosDoColaborador()
    percentualAumento = calcularPorcentagem(salario)
    salarioComAumento = calcularAumento(salario, percentualAumento)
    console.log(nome, "R$", salario, "%", percentualAumento, "R$", salarioComAumento)
    continuar = desejaContinuar()
}
function desejaContinuar() {
    return prompt("deseja continuar? (1) SIM (2 NÃO")
}
function dadosDoColaborador() {
    nome = prompt("Insira seu nome:")
    salario = parseFloat(prompt("Insira o valor de salário:"))
}
function calcularPorcentagem(parametroSalario) {
    if (parametroSalario <= 1500) {
        return 20
    } else if (parametroSalario <= 2000) {
        return 15
    } else if (parametroSalario <= 3000) {
        return 10
    } else {
        return 5
    }
}

function calcularAumento(parametroSalario, parametroAumento) {
    return parametroSalario + (parametroSalario * (parametroAumento / 100))
}


