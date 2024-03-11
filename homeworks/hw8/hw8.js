// TASK 1.1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log('TASK 1.1 - Створити функцію конструктор для об\'єктів User з полями id, name, surname , email, phone\n' +
    '// створити пустий масив, наповнити його 10 об\'єктами new User(....)')
function User(id,name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let arrUser = [
    new User(1,'Ilya', 'Bychkov', 'ilyabychkov5x404@gmail.com', '+380 68 191 1010'),
    new User(2412,'Vasya', 'Pypkin', 'vasya@gmail.com', '+380 70 202 4151'),
    new User(341,'Frodo', 'Symkin', 'frodo@gmail.com', '+380 98 505 4014'),
    new User(41,'Walter', 'White', 'ww@gmail.com', '+380 90 615 6546'),
    new User(54,'Galya', 'Balyvana', 'galya@gmail.com', '+380 93 111 2222'),
    new User(64,'David', 'Bychkov', 'dava@gmail.com', '+380 65 777 5533'),
    new User(751,'Danya', 'Bychkov', 'danya@gmail.com', '+380 93 404 4141'),
    new User(518,'Mike', 'Tayson', 'mike@gmail.com', '+380 68 308 6346'),
    new User(91,'Sasha', 'Black', 'black@gmail.com', '+380 95 312 1234'),
    new User(120,'Anna', 'Nana', 'ananan@gmail.com', '+380 68 414 4431')
]
console.log(arrUser);

//TASK 1.2
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log('TASK 1.2 -- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки обєкти з парними id (filter)')

let arrtask12 = arrUser.filter(obj => (obj.id % 2 === 0))
console.log(arrtask12);


//TASK 1.3
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log('TASK 1.3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)')

console.log(arrtask12.sort((a, b) => a.id - b.id));

//TASK 2.1
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

console.log('TASK 2.1 - створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)\n' +
    '// створити пустий масив, наповнити його 10 об\'єктами Client')

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }


}

let clientList = [
    new Client(1,'Ilya', 'Bychkov', 'ilyabychkov5x404@gmail.com', '+380 68 191 1010', ['apple', 'juice', 'orange']),
    new Client(2412,'Vasya', 'Pypkin', 'vasya@gmail.com', '+380 70 202 4151', ['apple', 'juice', 'orange', 'bread'] ),
    new Client(341,'Frodo', 'Symkin', 'frodo@gmail.com', '+380 98 505 4014', ['apple']),
    new Client(41,'Walter', 'White', 'ww@gmail.com', '+380 90 615 6546', ['crisps']),
    new Client(54,'Galya', 'Balyvana', 'galya@gmail.com', '+380 93 111 2222', ['beer', 'nuts']),
    new Client(64,'David', 'Bychkov', 'dava@gmail.com', '+380 65 777 5533', ['juice','candies']),
    new Client(751,'Danya', 'Bychkov', 'danya@gmail.com', '+380 93 404 4141',['banan','orange','cake','toy','candies']),
    new Client(518,'Mike', 'Tayson', 'mike@gmail.com', '+380 68 308 6346',['whiskey','coke','juice']),
    new Client(91,'Sasha', 'Black', 'black@gmail.com', '+380 95 312 1234', ['vodka', 'cigarettes','beer','water']),
    new Client(120,'Anna', 'Nana', 'ananan@gmail.com', '+380 68 414 4431',[])
]
console.log(clientList);

//TASK 2.2
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log('TASK 2.2 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)')

let task22 = clientList.sort(((a,b) => {
        if(a.order.length > b.order.length){
            return 1
        }
        else if(a.order.length < b.order.length){
            return -1
        }
        else{ return 0}

    }
))

console.log(task22);

//TASK 3.1
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log('TASK 3.1')

function CarConstructor(make,model, year, max_speed, engine_size){
    this.make = make
    this.model = model
    this.year = year
    this.max_speed = max_speed
    this.engine_size = engine_size


    this.drive = function (){
        console.log((`їдемо зі швидкістю ${this.max_speed} км на годину`));}

    this.info = function (){
        for (const elements in this) {
            if(this.hasOwnProperty(elements) && typeof this[elements] !== 'function'){

                console.log(`${elements} - ${this[elements]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed){
        newSpeed = this.max_speed + newSpeed
        console.log(newSpeed);
    }

    this.changeYear = function (newValue){
        this.newValue = this.year
        console.log(newValue);
    }

    this.addDriver = function (name,age,drive_experience){
        this.driver = {
            name,
            age,
            drive_experience
        }
    }

}

let car1 = new CarConstructor('Audi', 'A6', 2023, 320, '2.0')

console.log(car1);
car1.drive()
car1.info()
car1.increaseMaxSpeed(100)
car1.changeYear(2024)
car1.addDriver('Ryan Gosling', 43, 25)
console.log(car1);


//TASK 4.1
//- (Те саме, тільки через клас)
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log('TASK 4.1 - (Те саме, тільки через клас)')

class CarConstructorClass{
    constructor(make, model, year, max_speed, engine_size) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_size = engine_size;
    }


    drive(){
        console.log((`їдемо зі швидкістю ${this.max_speed} км на годину`));
    }

    info(){
            for (const elements in this) {
            if(this.hasOwnProperty(elements) && typeof this[elements] !== 'function'){

            console.log(`${elements} - ${this[elements]}`);
        }
        }
    }

    increaseMaxSpeed(newSpeed){
        newSpeed = this.max_speed + newSpeed
        console.log(newSpeed);
    }

    changeYear(newValue){
        this.newValue = this.year
        console.log(newValue);
    }

    addDriver(name,age,drive_experience){
        this.driver = {
            name,
            age,
            drive_experience
        }
    }
}

let car2 = new CarConstructorClass('Ford', 'Mustang', 1973, 350, '5.0')

console.log(car2);
car2.drive()
car2.info()
car2.increaseMaxSpeed(100)
car2.changeYear(2000)
car2.addDriver('Ryan Gosling', 43, 25)
console.log(car2);

//TASK 5.1
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log('TASK 5.1 - задача з попелюшкою')

class Popelyshka{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let arrPopelyshok = [
    new Popelyshka('Anna',21,36),
    new Popelyshka('Yana',20,35),
    new Popelyshka('Marta',21,34),
    new Popelyshka('Veronika',60,40),
    new Popelyshka('Baba Yaga',100,47),
    new Popelyshka('Zoryana',25,38),
    new Popelyshka('Anastasiya',22,33),
    new Popelyshka('Zlata',20,37),
    new Popelyshka('Sasha',29,39),
    new Popelyshka('Olya',18,29),
]
console.log(arrPopelyshok);

class Prince{

    constructor(name, age, size_find) {
        this.name = name;
        this.age = age;
        this.size_find = size_find;
    }

    foundFunc(arr){
        for (const elementsOfPopel of arr) {
            if(elementsOfPopel.foot_size === this.size_find){
                console.log((`Hoooraaay, your queen is ${elementsOfPopel.name}`));
            }
        }
    }
}


let prince = new Prince('Ilya', 20, 37)
console.log(prince);
prince.foundFunc(arrPopelyshok)


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку')
let findTask = arrPopelyshok.find((popel)=>popel.foot_size === prince.size_find)
console.log('She is your queen', findTask);