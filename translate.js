const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "Idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "Idiomas/espanol.js"
document.head.appendChild(linguaEspanhola);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "Idiomas/english.js"
document.head.appendChild(linguaInglesa);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "Idiomas/francais.js"
document.head.appendChild(linguaFrancesa);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function( ){
    translate(this.value);
});

function translate(idioma) {
 const traducao = 
 (idioma == "br") ? portugues()
 : (idioma == "es") ? espanol()
 : (idioma == "en") ? english()
 : (idioma == "fr") ? francais() 
 : null; 
 setLanguage(traducao);
}

function setLanguage(traducao) {
    btSoma = document.getElementById("btSoma");
    btSubtracao = document.getElementById("btSubtracao");
    btMultiplicacao = document.getElementById("btMultiplicacao");
    btDivisao = document.getElementById("btDivisao");

    btSoma.value = traducao.Soma;
    btSubtracao.value = traducao.Subtração
    btMultiplicacao.value = traducao.Multiplicação
    btDivisao.value = traducao.Divisão
    titulo.textContent = traducao.titulo
    BoasVindas.textContent = traducao.BoasVindas
    
}
