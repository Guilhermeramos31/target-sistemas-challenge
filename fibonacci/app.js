console.log(fibonacci(610));

function fibonacci (num){
    let number = [0,1];
    for (let i = 0; i < number.length; i++) {
        var result = number[i]+number[i+1];
        number.push(result)
        if(result === num) {
            return ('O numero pertence a sequênciade Fibonacci.')
        }  else if(result > num) {
                return ('O numero não pertence a sequênciade Fibonacci.');
        }
    }
}