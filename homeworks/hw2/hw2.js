// TASK1
/*Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 */
console.log("TASK1.1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль")
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 5, 'a', 444, 'text', {test: 'green', name: "Alberto"}, 7532, 'no', 10, 'yes']
console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7])
console.log(arr1[8])
console.log(arr1[9])


console.log("TASK1.2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.")
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let object1 = {
    title: "Hobbit",
    pageCount: 500,
    genre: "Fantasy"
}
let object2 = {
    title: "1984",
    pageCount: 320,
    genre: "dystopian novel"
}
let object3 = {
    title: "Fire & Blood",
    pageCount: 768,
    genre: "Fantasy"
}
console.log(object1)
console.log(object2)
console.log(object3)

console.log("TASK1.3 Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле \"автори\" - являється  масивом. Кожен автор має поля name та age.")
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let object4 = {
    title: "Hobbit",
    pageCount: 500,
    genre: "Fantasy",
    authors: [{
        name: "John Ronald Reuel Tolkien",
        age: 'dead'
    }]
}
let object5 = {
    title: "1984",
    pageCount: 320,
    genre: "dystopian novel",
    authors: [{
        name: "George Orwell",
        age: 'dead'
    }]
}
let object6 = {
    title: "Fire & Blood",
    pageCount: 768,
    genre: "Fantasy",
    authors: [{
        name: "George R. R. Martin",
        age: '75'
    }]
}
console.log(object4)
console.log(object5)
console.log(object6)

console.log("TASK1.4 - Створити масив з 10 об'єктами які описують сутніть \"користувач\". Поля: name, username,password. Вивести в консоль пароль кожного користувачаS")
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let userArr = [
    {name: "Ilya", username: "DardCold", password: "1111"},
    {name: "Petro", username: "Petya01", password: "2222"},
    {name: "Anna", username: "Anika", password: "afkjajafjalfkjalskfjlasjfkla"},
    {name: "John", username: "Snow", password: "afjLAJF2i14"},
    {name: "Vasya", username: "Vaska228", password: "0101"},
    {name: "Arnold", username: "Noname", password: "aflj1"},
    {name: "Vlad", username: "razhodnik", password: "hhhetkejg"},
    {name: "Volodya", username: "Cook", password: "1131"},
    {name: "Yana", username: "robot", password: "5514"},
    {name: "Mariya", username: "BOt", password: "14141"},
]
console.log(userArr[0].password)
console.log(userArr[1].password)
console.log(userArr[2].password)
console.log(userArr[3].password)
console.log(userArr[4].password)
console.log(userArr[5].password)
console.log(userArr[6].password)
console.log(userArr[7].password)
console.log(userArr[8].password)
console.log(userArr[9].password)


// TASK2
/* Логічні розгалуження:
- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа. */

console.log("TASK2.1 - Є змінна х, якій ви надаєте довільне числове значення.\n" +
    "Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3")
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0) {
    console.log("Вірно")
} else (console.log("Невірно"))
let a = 0;
if (a !== 0) {
    console.log("Вірно")
} else (console.log("Невірно"))
let a1 = -3;
if (a1 !== 0) {
    console.log("Вірно")
} else (console.log("Невірно"))

console.log("TASK2.2 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число\n" +
    "(в першу, другу, третю или четверту частину години).")
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 5;
if (time >= 0 && time <= 15) {
    console.log('Перша четверть')
} else if (time > 15 && time <= 30) {
    console.log('Друга четверть')
} else if (time > 30 && time <= 45) {
    console.log('Третя четверть')
} else if (time > 45 && time <= 59) {
    console.log('Четверта четверть')
} else {
    console.log("Wrong")
}


console.log("TASK2.3 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).")
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 4;
if (day >= 1 && day <= 10) {
    console.log("Перша декада")
} else if (day > 10 && day <= 20) {
    console.log("Друга декада")
} else if (day > 20 && day <= 31) {
    console.log("Третя декада")
} else {
    console.log("Wrong")
}

console.log("TASK2.4 Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).")
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let NumDay = +prompt("Input number day from 1 to 7")
switch (NumDay){
    case 1:
        document.write("<p>Monday</p>")
        break;
    case 2:
        document.write("<p>Tuesday</p>")
        break;
    case 3:
        document.write("<p>Wednesday</p>")
        break;
    case 4:
        document.write("<p>Thursday</p>")
        break;
    case 5:
        document.write("<p>Friday</p>")
        break;
    case 6:
        document.write("<p>Saturday</p>")
        break;
    case 7:
        document.write("<p>Sunday</p>")
        break;
}

console.log("TASK2.5 - Користувач вводить або має два числа.\n" +
    "Потрібно знайти та вивести максимальне число з тих двох .\n" +
    "Також потрібно врахувати коли введені рівні числа.")
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let userNumber1 = +prompt("Input first number")
let userNumber2 = +prompt("Input second number")
if(userNumber1 > userNumber2){
    document.write("<p>First Number is bigger</p>")
}else if( userNumber1 === userNumber2){
    document.write("<p>Numbers are equal</p>")
}else if( userNumber1 < userNumber2){
    document.write("<p>Second Number is bigger</p>")
}
else{
    alert("Is this number!?")
}




// TASK3
/* - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false) */

console.log("TASK3.1- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,\n" +
    "за допомоги  оператора || буде присвоювати змінній х значення \"default\"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)")

let x1 = null;
console.log(typeof x1)
if( x1 === undefined || x1 === null){
    x1 = "default"
    console.log(x1)
}else{
    console.log("Aaa")
}

// TASK4
/* - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер")
}
else{ console.log("Не супер")}