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

array = [10,20,12,5,8,15]
insertion(array)
console.log(array)