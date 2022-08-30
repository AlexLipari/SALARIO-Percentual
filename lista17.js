var nome
var salario = 0
var percentualAumento = 0
var salarioComAumento = 0


dadosDoColaborador()
percentualAumento = calcularPorcentagem(salario)
salarioComAumento = calcularAumento(salario, percentualAumento)


function dadosDoColaborador() {
    nome = prompt("Insira seu nome:")
    salario = parseFloat(prompt("Insira o valor de salário:"))
}
function calcularPorcentagem(parametroSalario) {
    if (parametroSalario <= 1500) {
        percentualAumento = 20
    } else if (parametroSalario <= 2000) {
        percentualAumento = 15
    } else if (parametroSalario <= 3000) {
        percentualAumento = 10
    } else {
        percentualAumento = 5
    }
}

function calcularAumento(parametroSalario, parametroAumento) {
return parametroSalario + (parametroSalario * (parametroAumento / 100))
}


