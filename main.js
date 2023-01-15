const array = []
let comand = prompt("Введите команду")
let text = 'asdfasdfa'
do{
    comand = prompt("Введите команду")
    let arr = comand.split(' ')
    console.log(arr);
    if(arr[0] == 'add') {
        array.push(arr[1])

    } else if(arr[0] == 'del') {
        for(let item in array) {
            if(array[item] == arr[1]) {
                array.splice(item, 1)
            }
        }

    }

    
    console.log(array);
} while (comand != 'stop')
console.log(comand);
