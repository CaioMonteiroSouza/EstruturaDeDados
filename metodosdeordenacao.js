function sort(arr) {
    const Tamanho = arr.length
    for (let i = 0; i<Tamanho; i++){
        for (let j = 0; j < Tamanho - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

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

function insertion(arr){
    const len = arr.length
    let aux
    let j
    for(let i = 0;i < len; i++){
        aux = arr[i]
        j = i - 1
        while(j >= 0 && arr[j] > aux){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = aux
    }
}

let array = [5,7,8,9,10,0]
let UnsortedArray = [5,7,8,9,10,0]
console.log("Bubble sort antes de organizar: ", array)
sort(array)
console.log("Bubble sort Organizada: ", array)
array = UnsortedArray
console.log("----------------------")
console.log("Seleção direta antes de organizar: ", array)
selecaoDireta(array)
console.log("Seleção direta Organizada: ", array)
array = UnsortedArray
console.log("----------------------")
console.log("Insertion sort antes de organizar: ", array)
selecaoDireta(array)
console.log("Insertion sort Organizada: ", array)
array = UnsortedArray