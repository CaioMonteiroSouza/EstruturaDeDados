function potencia(num, pot){
    if(pot == 0){
        return 1
    }else{
        return num * potencia(num, pot - 1)
    }
}

let num = 5
let pot = 4
let resultado = potencia(num, pot)
console.log(resultado)