function BuscaBinaria(vetor, num, len, inicio){
    if(inicio > len){
        return -1
    }else{
        let metade = Math.floor((len + inicio)/2)
        if(num < vetor[metade]){
            return BuscaBinaria(vetor, num, metade - 1, inicio)
        }else if(num > vetor[metade]){
            return BuscaBinaria(vetor, num, len, metade + 1)
        }else if(num == vetor[metade]){
            return len
        }else{
            return "Não encontrado"
        }
    }

}

let vetor = [2,5,7,10,11,15,17,19,20]
let len = vetor.length - 1
let inicio = 0
let num = 16
let resultado = BuscaBinaria(vetor,num,len, inicio)
console.log(resultado)