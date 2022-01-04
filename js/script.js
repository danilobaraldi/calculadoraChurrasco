//Qual a quantidade de comida e bebida em relação ao tempo do churrasco? 
//Carne - 400 gramas por pessoa mais de 6 horas = 650
//Cerveja - 1200ml por pessoa mais de 6 horas = 2000ml
//Refrigerante/agua - 1000ml por pessoa mais de 6 horas = 1500ml
// Crianças contam como meia pessoa no consumo. 


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.ariaValueMax;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) * criancas);

    resultado.innerHTML = '<p>${qtdTotalCarne}g de Carne</p>';
    resultado.innerHTML += '<p>${qtdTotalCerveja}ml de Cerveja</p>';
    resultado.innerHTML += '<p>${qtdTotalBebidas}ml de Bebidas</p>';

}
//Calcula quantidade de carner por pessoa
function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
    
}
//calcular quantidade de cerveja POR ADULTO! 
function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
    
}

//calcular quantidade de bebidas por pessoa! 
function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1200;
    }
    
}