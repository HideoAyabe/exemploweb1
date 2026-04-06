// //declarações e variaveis
// //var, let e const

// var nome="fiap";
// console.log(nome);

// var nome="teste";
// console.log(nome);

// if(true){
//     var apelido="fiapinho";
//     console.log(apelido)
// }

// const taxajuros=0.05;
// console.log(taxajuros)

// //typeof verifica o tipo da variavel
// var exemplo="ola-dev-var";
// console.log(exemplo);
// let exemplo1="ola-devlet";
// console.log(exemplo1);
// const exemplo2="ola-dev-const";
// console.log(exemplo2)

// let exemplo3=10;
// console.log(exemplo3)

// let exemplo4=true;
// console.log(exemplo4);

// let exemplo5={nome1:"teste"};
// console.log(exemplo5);

// let exemplo6=["java","c#","php"];
// console.log(exemplo6);

// //valor undefined

// let exemplo7;
// console.log(exemplo7)

// //valor vazio
// let exemplo8 =null;
// console.log(exemplo8);

// //operadores aritmeticos

// const valor1=10;
// const valor2=20;
// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// //operadores logicos
// // = atribuição
// // == comparação
// // === valor e tipo(estritamente igual)
// // && = e (todas condições tem de ser verdadeiras)
// // || = ou (uma das condição tem que ser verdadeira)
// console.log(valor1 < valor2);
// console.log(valor1 > valor2 && valor2 < 10);
// console.log(valor2 >100 || valor1 <10);
// console.log(valor1 == valor2);
// console.log(valor2 === valor1)

// //exercicios

// let p=10;
// let v=3;
// let precofinal = p - v;
// console.log(precofinal);

// //exercicio2

// let a=20
// let b=10
// console.log(a === 20 && b >= 10);


// //exercicio3

// const usuario = true;
// const token = "bahia"

// const transacao =usuariologado ===2 
// console.log("transação autorizada",transacao)


// //estrutura condicional

//if

if(true){
    console.log("verdadeiro")
};

let nome="fiap";

if(nome =="fiap"){
    console.log("nome correto")
}

// if/else

if(nome =="Fiap"){
    console.log("usuario correto")
}else{
    console.log("usuario errado")
}

// if encadeado/aninhado

let idade = 47;

if(idade <= 18){
    console.log("é uma criança")
}else if(idade >13 && idade <=18){
    console.log("é um adolescente")
}else if(idade >18 && idade <= 50){
    console.log("é um adulto")
}else{
    console.log("é um idoso")
}

// switch case
/*
switch = escolhas
case = resultado da escolha
break = parar a ação
default = resultado base 
*/

let pratos="salada";

switch(pratos){
    case "macarrão":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("salada saudavel")
        break;
    case "lasanha":
        console.log("melhor prato")
        break;
    default:
        console.log("nenhuma das opções")
}

//ternario 
/*
? = if
: = else
*/
let valor = 100;
let resultado = valor ==100 ? "valor certo": "valor errado";
console.log(resultado)

let usuario="dev";
let logado= usuario =="fiap" ? "usuario logado" : "usuario invalido";
console.log(logado)

//estrutura de repetição

// o laço de repetição é utilizado quando
// sabemos quantas vezes o codigo sera executado

for( let i=1; i<=5;i++){
    console.log("valor",1)
}

const linguagens = ["java","python","c#","php"];
for(let i = 0; i < linguagens.length; i++){
    console.log("linguagem", i, ":", linguagens[i])
}

const tecnologias = ["js","html","css"];
for(const tec of tecnologias){
    console.log("estudando:",tec)
}

//for com objeto
const carros = {marca:"Volks",modelo:"fusca",ano:1980,cor:"azul"};
for( let dados in carros ){
    console.log(dados,":",carros[dados])
}

// while - usamos quando não sabemos a quantidade de vezes

let numero = 1;

while (numero <=10){
    console.log("contagem",numero);
    numero++;
}

//variavel indefinida
let num;
// enquanto o numero não for 0 ele continuara rodando
while (num !== "0"){
    num = prompt("digite um numero ou 0 para sair")
    console.log("você digitou", num) 
}