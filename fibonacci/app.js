console.log(fibonacci("1"));

function fibonacci (num){
    let number = [0,1];
    for (let i = 0; i < number.length; i++) {
        var result = number[i]+number[i+1];
        number.push(result);
        if(result == num || num == 0) {
            return ('O numero pertence a sequênciade Fibonacci.');
        }  else if(result > num || typeof num === "string") {
            return ('O numero não pertence a sequênciade Fibonacci.');
        }
    }
}