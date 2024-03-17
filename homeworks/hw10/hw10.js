// TASk 1.1
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

console.log('TASK 1.1')

let form_task1 = document.forms.form
form_task1.onsubmit = function (e){
    e.preventDefault()
    let user = {name: this.name.value, surname: this.surname.value, age: this.age.value}
    console.log(user);
    let div = document.getElementById('div_task1')
    div.classList.add('div_task1')
    div.innerHTML = `Hi, ${user.name} ${user.surname} <br> Your age ${user.age}`
}

// TASk 1.2
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

console.log('TASK 1.2')

let div_task2 = document.getElementById('div_task2')
let num = localStorage.getItem('number')

if(num){
    div_task2.textContent = num
}
let current_num = parseInt(div_task2.textContent)
current_num = current_num + 1
div_task2.textContent = current_num
localStorage.setItem('number', current_num)

// TASK 1.3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// TASK 1.4
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

function generateArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
        const object = {
            name: `Element ${i + 1}`,
            value: Math.floor(Math.random() * 100) + 1,
        };
        array.push(object);
    }
    return array;
}


document.addEventListener('DOMContentLoaded', function (){
    localStorage.removeItem('myArray');
    localStorage.removeItem('currentIndex');
    let myArray = JSON.parse(localStorage.getItem('myArray'))
    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
    if (!myArray) {
        myArray = generateArray();
        localStorage.setItem('myArray', JSON.stringify(myArray));
    }

    console.log(myArray);
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    document.body.append(button1,button2)
    button1.innerText = 'prev'
    button2.innerText = 'next'
    button1.classList.add('butt')
    button2.classList.add('butt')
    let index
    let ul_task14 = document.createElement('ul')
    document.body.appendChild(ul_task14)

    function showItems(startIndex){
        for (let i = startIndex; i < startIndex + 10; i++) {
            const arrElement = myArray[i];
            let li_task14 = document.createElement('li')
            li_task14.innerText = `${arrElement.name} = ${arrElement.value}`
            ul_task14.appendChild(li_task14)
            index = i
        }
        localStorage.setItem('currentIndex', startIndex)
    }

    showItems(currentIndex)

    button1.onclick = function (e){
        e.preventDefault()
        currentIndex -= 10;
        if (currentIndex< 0){
            alert('Less than 0')
            currentIndex = 0
        }
        showItems(currentIndex)
        console.log(currentIndex)
    }
    button2.onclick = function (e){
        e.preventDefault()
        currentIndex += 10;
        if (currentIndex> 100){
            alert('More than 100')
            currentIndex = 100
        }
        showItems(currentIndex)
        console.log(currentIndex)
    }
})




// TASK 2
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let text = document.getElementById('text')
let button_task2 = document.getElementById('button4')

button_task2.onclick = function (e){
    e.preventDefault()
    text.remove()
}

// TASK3
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form_task3 = document.forms.form2
form_task3.onsubmit = function (e){
    e.preventDefault()
    let user2 = this.age.value
    console.log(user2);
    let text2 = document.getElementById('text2')
    if(user2 < 18){
        text2.innerHTML = `Your age ${user2}, Go away`
    }else{
        text2.innerHTML = `Your age ${user2}, Welcome`
    }
}