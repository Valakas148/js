//Task 4.1
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log("Task 4.1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б")

function areaRectangle(A, B){
    return A*B
}
console.log("Area = ", areaRectangle(5,6))

//Task 4.2
//-- створити функцію яка обчислює та повертає площу кола з радіусом r
console.log('')
console.log("Task 4.2 - створити функцію яка обчислює та повертає площу кола з радіусом r")

function areaCircle(r){
    return r*r*(3.14)
}
console.log("Area = ", areaCircle(6))

//Task 4.3
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log('')
console.log("Task 4.3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r")

function areaCylinder(h, r){
    return (2*3.14*r*(h + r)) // Я вказав формулу повної поверхності циліндри, можна ще лише бічної (2*3.14*r*h)
}
console.log("Area = ", areaCylinder(3, 2))

//Task 4.4
//- створити функцію яка приймає масив та виводить кожен його елемент
console.log('')
console.log("Task 4.4 - створити функцію яка приймає масив та виводить кожен його елемент")

function array(arr){
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

let massive = [1,4,15,'afa','afajkf',11]

array(massive)


//Task 4.5
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
console.log('')
console.log("Task 4.5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент")

function Doc_writer(text_arg){
    document.write(`<h1>${text_arg}</h1>`)
}

let text = 'Welcome!!!!!!'
Doc_writer(text)

//Task 4.6
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
console.log('')
console.log("Task 4.6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий")

function ul_func(text_arg){
    document.write(`
        <ul>
            <li>${text_arg}</li>
            <li>${text_arg}</li>
            <li>${text_arg}</li>
</ul>
    `)
}

let li_test = 'Ліжка тут знаходяться, їм має бути 3'
ul_func(li_test)

//Task 4.7
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
console.log('')
console.log("Task 4.7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)")

function ul_func_loop(text_arg, iteration){
    document.write(`<ul>`)
    for (let i = 0; i < iteration; i++) {
        document.write(`
            <li>${text_arg}</li>
    `)
    }
    document.write(`</ul>`)
}

let li_test2 = 'Ліжка тут вже через цикл'
ul_func_loop(li_test2, 5)

//Task 4.8
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log('')
console.log("Task 4.8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список")

function Array_Get(arr){
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`
            <li>${arr[i]}</li>
    `)
    }
    document.write(`</ul>`)
}

let array_task48 = [1,2,3,'a','b','c',true,false]

Array_Get(array_task48)

//Task 4.9
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
console.log('')
console.log("Task 4.9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.")

function Doc_obj(arr){
    for (const ObjElement of arr) {
        document.write(`<div class="obj">`)
        for (const arrKey in ObjElement) {
            document.write(`
            <p>${arrKey} - ${ObjElement[arrKey]}</p>
            `)
        }
        document.write(`</div>`)
    }
}
let obj_task49 = [
    {id: 1, name: 'Ilya', age: 19},
    {id: 2, name: 'Ded', age: 40},
    {id: 3, name: 'Petro', age: 20}
]

Doc_obj(obj_task49)


//Task 4.10
//- створити функцію яка повертає найменьше число з масиву
console.log('')
console.log("Task 4.10 - створити функцію яка повертає найменьше число з масиву")

function min_func(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

let arr_task410 = [40,30,50,100,69,25,140,15150,105105,215,1424]
console.log(min_func(arr_task410))


//Task 4.11
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('')
console.log("Task 4.11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13")

function sum(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}

let sum_arr = [1,3,5,20]
console.log("Sum = ", sum(sum_arr))


//Task 4.12
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
console.log('')
console.log("Task 4.12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах")

function swap(arr,index1,index2){

    let copy = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = copy

}

let swap_arr = [2,4,10,1]
swap(swap_arr, 1 , 2)
console.log(swap_arr)


//Task 4.13
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
console.log('')
console.log("Task 4.13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)")

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let result
    for (const currencyElement of currencyValues) {
        if(exchangeCurrency === currencyElement.currency){
            result = sumUAH * currencyElement.value
            return result
        }
    }


}

let currencyVal = [
    {currency: 'USD', value: 38.5},
    {currency: 'PLN', value: 10},
    {currency: 'EUR', value: 40}
]
console.log("Sum = ", exchange(1000, currencyVal, 'USD'))





