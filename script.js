

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2")
let resultado = document.querySelector("#resultado")

let btSoma = document.querySelector("#btSoma")
btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b) {
    resultado.textContent = (a + b);   
}

let btSubtracao = document.querySelector("#btSubtracao")
btSubtracao.addEventListener("click", function () {
    subtração(Number(valor1.value), Number(valor2.value));
})

function subtração(a, b) {
    resultado.textContent = (a - b);   
}

let btMultiplicacao = document.querySelector("#btMultiplicacao")
btMultiplicacao.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value));
})

function multiplicacao(a, b) {
    resultado.textContent = (a * b);   
}

let btDivisao = document.querySelector("#btDivisao")
btDivisao.addEventListener("click", function () {
    divisao(Number(valor1.value), Number(valor2.value));
})

function divisao(a, b) {
    resultado.textContent = (a / b);   
}