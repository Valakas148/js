// TASK 1.1
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'


console.log("TASK 1.1 - Знайти та вивести довижину настипних стрінгових значень\n" +
    " 'hello world', 'lorem ipsum', 'javascript is cool'")
let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'
console.log("hello world length:", str1.length)
console.log("lorem ipsum length:", str2.length)
console.log("javascript is cool length:", str3.length)

// TASK 1.2
//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool''

console.log("TASK 1.2 - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'")
let Upperstr1 = str1.toUpperCase()
let Upperstr2 = str2.toUpperCase()
let Upperstr3 = str3.toUpperCase()
console.log(Upperstr1, Upperstr2, Upperstr3)

// TASK 1.3
//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log("TASK 1.3 - Перевести до нижнього регістру настипні стрінгові значення\n" +
    "      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'")

let lowstr1 = Upperstr1.toLowerCase()
let lowstr2 = Upperstr2.toLowerCase()
let lowstr3 = Upperstr3.toLowerCase()
console.log(lowstr1, lowstr2, lowstr3)

// TASK 1.4
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log("TASK 1.4 - Є брудна стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.")

let str = ' dirty string   '
console.log(str.substring(str.indexOf(' ') + 1, str.lastIndexOf(' ') - 2))


// TASK 1.5
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

console.log("TASK 1.5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.")

let str15 = 'Ревуть воли як ясла повні';

function stringToarray(str){
    return str.split(' ')
}

let arr = stringToarray(str15);
console.log(arr)

// TASK 1.6
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

console.log("TASK 1.6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.")

let arrNum = [10,8,-7,55,987,-1011,0,1050,0]

console.log(arrNum.map(mass => (mass + '')));

// TASK 1.7
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

console.log("TASK 1.7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.")

let nums = [11,21,3];

function sortNums(num,direction){
    if( direction === 'ascending' ){
        return num.sort((a, b) => a - b)
    }
    else if( direction === 'descending'){
        return num.sort((a, b) => b - a)
    }
    else {console.log("Wrong direction")}
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// TASK 2.1
//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log("TASK 2.1 - відсортувати його за спаданням за monthDuration")

let task2 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(task2)

console.log("TASK 2.2 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців")

console.log(task2.filter(obj => obj.monthDuration > 5))

console.log("TASK 2.3 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}")

console.log(task2.map(((obj,index) => ({id: index + 1, title: obj.title, monthDuration: obj.monthDuration}))))

// TASK 3.1
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



function card(){
    let cardSuit = ['spade', 'diamond','heart', 'clubs']
    let value = ['6','7','8','9','10', 'ace','jack','queen','king']
    let color = {
            spade:'black',
            diamond: 'red',
            heart: 'red',
            clubs: 'black'
        }
    let cards = []

    for (const nameCard of cardSuit) {
        for (const valueElement of value) {
            cards.push({
                cardSuit: nameCard,
                value: valueElement,
                color: color[nameCard]
            })
        }
    }

    return cards
}

let cards = card()
console.log(cards)


console.log("TASK 3.1 - знайти піковий туз")
let task31 = cards.filter(a => ((a.cardSuit === 'spade' ) && (a.value === 'ace')))
console.log(task31)

console.log("TASK 3.2 всі шістки")

let task32 = cards.filter(six => (six.value === '6'))
console.log(task32)

console.log("TASK 3.3 - всі червоні карти")

let task33 = cards.filter(reds => (reds.color ==='red'))
console.log(task33)

console.log("TASK 3.4 всі буби")

let task34 = cards.filter(mast => (mast.cardSuit ==='diamond'))
console.log(task34)

console.log("TASK 3.5 - всі трефи від 9 та більше") // я не знаю що таке трефи), шось гуглив, певно це хреста

let task35 = cards.filter(mast => ((mast.cardSuit ==='clubs') && (mast.value !== '6' && mast.value !== '7' && mast.value !== '8' )))

console.log(task35)

// TASK 4
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log("TASK 4 Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по мастях в об'єкт")
let task4 = cards.reduce((previousValue, currentValue) =>{
    if (currentValue.cardSuit === 'spade'){
        previousValue.spades.push(currentValue)
    }
    else if(currentValue.cardSuit === 'diamond'){
            previousValue.diamonds.push(currentValue)
        }
    else if(currentValue.cardSuit === 'heart'){
        previousValue.hearts.push(currentValue)
    }
    else if(currentValue.cardSuit === 'clubs'){
        previousValue.clubs.push(currentValue)
    }
    return previousValue
},
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs:[]}
)

console.log(task4)


// TASK 5
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log("TASK5.1 --написати пошук всіх об'єктів, в який в modules є sass")

let task51 = coursesArray.filter(obj => obj.modules.includes('sass'))
console.log(task51)

console.log("TASK5.1 --написати пошук всіх об'єктів, в який в modules є docker")
let task52 = coursesArray.filter(obj => obj.modules.includes('docker'))
console.log(task52)


