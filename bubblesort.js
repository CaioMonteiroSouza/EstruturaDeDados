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

let array = [5,7,8,9,10,0]
console.log("Antes de organizar: ", array)
let SortedArray = sort(array)
console.log("Organizada: ", SortedArray)

