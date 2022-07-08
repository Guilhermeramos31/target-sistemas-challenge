const faturamento = {
    estados : ["SP", "RJ", "MG", "ES", "Outros"],
    valor : [67836.43, 36678.66, 29229.88, 27165.48, 19849.53]
}
const {estados , valor} = faturamento;
let faturamentoTotal = sumAll(faturamento.valor);

console.log("Estado|Faturamento |Percentual");

for (let i = 0; i < faturamento.valor.length; i++) {
   console.log(`${estados[i]}    |${format(valor[i])}|${percent(faturamentoTotal, faturamento.valor[i])}`);
}

function sumAll(a) {
    //num é a array que eu desejo somar.
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result = result + a[i];
    }
    return result;
}
function percent(a,b) {
    //a é a soma de todo o faturamento.
    //b é o faturamento de um mês.
    let result = (b*100)/a;
    return result.toFixed(2).replace('.',',')+'%';
}
function format(a) {
    let result = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(a)
    return result;
}