//fib(1) = 1
//fib(2) = 1

function fib(num){
    if(num == 1 || num == 2){
        return 1
    }else{
        return fib(num - 1) + fib(num - 2)
    }
}

let num = 5
let resultado = fib(num)
console.log(resultado)