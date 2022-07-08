const jsonDados = require("./dados.json");

let dias = [];
let valores = [];

for (let i = 0; i < jsonDados.length; i++) {
    var e = jsonDados[i];
    dias.push(e.dia);
    valores.push(e.valor);
}
let minValor = Math.min(...valores);
let maxValor = Math.max(...valores);
let contadorDias = (a) => {
    var dias = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > media(a)) {
            dias = dias+1;
        }
    }
    return dias;
};

console.log(`O menor valor de faturamento: ${format(minValor)}`);
console.log(`O maior valor de faturamento: ${format(maxValor)}`);
console.log(`Quantidade de dias que o faturamento foi acima da media: ${contadorDias(valores)}`);

function media(a) {
    let valores = [];
    for (let i = 0; i < a.length; i++) {
        valores.push(a[i]);
    }
    let soma = sumAll(valores);
    let result = soma/valores.length;
    return result; 
}
function sumAll(a) {
    //num é a array que eu desejo somar.
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result = result + a[i];
    }
    return result;
}
function format(a) {
    let result = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(a);
    return result;
}