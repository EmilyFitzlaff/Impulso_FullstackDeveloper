/*
var nome = "Emily";
var idade = 22

// alert("Bem-vindo " + nome + "! Você tem " + 22 + " anos");

console.log(nome);

var lista = ['maçã', 'pêra', 'laranja'];

lista.push("uva"); // adiciona novo elemento a lista

lista.pop(); // remove o último elemento

var fruta = { nome:"Maçã",
              cor:"Vermelha" };

console.log(fruta);

var frutas = [
    {nome:"Maçã", cor:"Vermelha"},
    {nome:"Uva", cor:"Roxo"}
];

console.log(frutas);

function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 2));
*/

function clicou() {
    document.getElementById("Agradecimento").InnerHTML = "<b>Obrigado por clicar!</b>";

    console.log(document.getElementById("Agradecimento"));
    alert("Obrigado por clicar!");
}