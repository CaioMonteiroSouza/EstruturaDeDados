function selecaoDireta(arr){
    let len = arr.length
    for(let i = 0; i < len; i++){
        let menorNumero = arr[i]
        let indexmenor = i
        let aux
        for(let j = i; j < len; j++){
            if (arr[j] < menorNumero){
                menorNumero = arr[j]
                indexmenor = j
            }
        }
        aux = arr[i]
        arr[i] = menorNumero
        arr[indexmenor] = aux
    }
}

let array = [1,3,4,5,7,9,0]
selecaoDireta(array)
console.log(array)