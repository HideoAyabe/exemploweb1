//declarações e variaveis
//var, let e const

var nome="fiap";
console.log(nome);

var nome="teste";
console.log(nome);

if(true){
    var apelido="fiapinho";
    console.log(apelido)
}

const taxajuros=0.05;
console.log(taxajuros)

//typeof verifica o tipo da variavel
var exemplo="ola-dev-var";
console.log(exemplo);
let exemplo1="ola-devlet";
console.log(exemplo1);
const exemplo2="ola-dev-const";
console.log(exemplo2)

let exemplo3=10;
console.log(exemplo3)

let exemplo4=true;
console.log(exemplo4);

let exemplo5={nome1:"teste"};
console.log(exemplo5);

let exemplo6=["java","c#","php"];
console.log(exemplo6);

//valor undefined

let exemplo7;
console.log(exemplo7)

//valor vazio
let exemplo8 =null;
console.log(exemplo8);

//operadores aritmeticos

const valor1=10;
const valor2=20;
console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

//operadores logicos
// = atribuição
// == comparação
// === valor e tipo(estritamente igual)
// && = e (todas condições tem de ser verdadeiras)
// || = ou (uma das condição tem que ser verdadeira)
console.log(valor1 < valor2);
console.log(valor1 > valor2 && valor2 < 10);
console.log(valor2 >100 || valor1 <10);
console.log(valor1 == valor2);
console.log(valor2 === valor1)

//exercicios

let p=10;
let v=3;
let precofinal = p - v;
console.log(precofinal);

//exercicio2

let a=20
let b=10
console.log(a === 20 && b >= 10);


//exercicio3

let usuario = true;
let token = "bahia"
console.log(usuario==true & token!=null)