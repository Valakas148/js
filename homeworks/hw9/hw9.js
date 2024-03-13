// TASK 1.1
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

document.write('TASK 1.1')



let block = document.createElement('div')
block.classList.add('wrap', 'collapse', 'alpha', 'beta')
block.style.background = 'yellow'
block.style.color = 'red'
block.style.fontSize = '32px'
block.style.height = '300px'
block.style.width = '300px'
let p = document.createElement('p')
p.innerText = 'TASK 1.1 створити блок'
block.appendChild(p)

document.body.appendChild(block)

let block_clone = block.cloneNode(true)
document.body.appendChild(block_clone)


// TASK 2.1
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

document.write('TASK 2.1')

let arr_task21 = ['Main','Products','About us','Contacts']

let ul_task21 = document.createElement('ul')
for (const arrElement of arr_task21) {
    let li_task21 = document.createElement('li')
    li_task21.innerText = `${arrElement}`
    li_task21.style.fontSize = '32px'
    ul_task21.append(li_task21)
}

document.body.appendChild(ul_task21)

// TASK 3.1
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

document.write('TASK 3.1')
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div_task31 = document.createElement('div')
    div_task31.style.height = '100px'
    div_task31.style.width = '150px'
    div_task31.style.background = 'lightgray'
    let p1_task31 = document.createElement('p')
    p1_task31.innerText = `Курс: ${coursesAndDurationArrayElement.title}`
    let p2_task31 = document.createElement('p')
    p2_task31.innerText = `Тривалість курсу: ${coursesAndDurationArrayElement.monthDuration}`
    div_task31.append(p1_task31, p2_task31)
    document.body.appendChild(div_task31)
}

// TASK 4.1
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

document.write('TASK 4.1')

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div_task41 = document.createElement('div')
    div_task41.classList.add('item')
    div_task41.style.height = '150px'
    div_task41.style.width = '200px'
    div_task41.style.background = 'bisque'
    let h_task41 = document.createElement('h1')
    h_task41.classList.add('heading')
    h_task41.innerText = `${coursesAndDurationArrayElement.title}`
    let p_task41 = document.createElement('p')
    p_task41.classList.add('description')
    p_task41.innerText = `Тривалість курсу: ${coursesAndDurationArrayElement.monthDuration}`
    div_task41.append(h_task41, p_task41)
    document.body.appendChild(div_task41)
}

// TASK 5.1
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
document.write('TASK 5.1')

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


let div_main = document.createElement('div')
div_main.classList.add('div_main')
div_main.style.display = 'flex'
div_main.style.justifyContent = 'center'
div_main.style.alignItems = 'center'
div_main.style.gap = '20px'
document.body.appendChild(div_main)
for (const arrElement of simpsons) {
    let div_member = document.createElement('div')
    div_member.classList.add('member')
    div_member.style.backgroundColor = 'lightgray'
    let div_info = document.createElement('div')
    let h_Nmember = document.createElement('h1')
    let h_Smember = document.createElement('h1')
    let p_Amember = document.createElement('p')
    let p_Imember = document.createElement('p')
    let img_member = document.createElement('img')
    div_info.classList.add('div_info_member')
    h_Nmember.classList.add('name_member')
    h_Smember.classList.add('surname_member')
    p_Amember.classList.add('age_member')
    p_Imember.classList.add('info_member')
    img_member.classList.add('img_member')
    h_Nmember.innerText = `${arrElement.name}`
    h_Smember.innerText = `${arrElement.surname}`
    div_info.append(h_Nmember, h_Smember)
    div_info.style.display = 'flex'
    div_info.style.justifyContent = 'flex-start'
    div_info.style.alignItems = 'center'
    div_info.style.gap = '5px'
    p_Amember.innerText = `${arrElement.age}`
    p_Imember.innerHTML = `${arrElement.info}`
    img_member.src = arrElement.photo
    div_member.append(div_info,p_Amember,p_Imember, img_member)
    div_main.appendChild(div_member)
}



// TASK 6.1
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
document.write('TASK 6.1')

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

let div_main_task61 = document.createElement('div')
div_main_task61.classList.add('div_main')
div_main_task61.style.display = 'flex'
div_main_task61.style.justifyContent = 'center'
div_main_task61.style.alignItems = 'center'
div_main_task61.style.flexDirection = 'column'
div_main_task61.style.gap = '20px'
document.body.appendChild(div_main_task61)

for (const coursesArrayElement of coursesArray) {
    let div_block = document.createElement('div')
    div_block.classList.add('div_block')
    div_block.style.border = '2px solid red'
    div_block.style.width = '500px'
    div_block.style.padding = '10px'


    let div_title = document.createElement('div')
    div_title.classList.add('title')
    let p_title = document.createElement('p')
    p_title.innerText = `${coursesArrayElement.title}`
    div_title.appendChild(p_title)
    div_title.style.border = '2px solid blue'
    div_title.style.marginBottom = '10px'
    div_title.style.textAlign = 'center'

    let div_duration = document.createElement('div')
    div_duration.classList.add('duration')
    div_duration.style.display = 'flex'
    div_duration.style.gap = '15px'
    let p_Mduration = document.createElement('p')
    p_Mduration.innerText = `Тривалість в місяцях: ${coursesArrayElement.monthDuration}`
    let p_Hduration = document.createElement('p')
    p_Hduration.innerText = `Тривалість в годинах: ${coursesArrayElement.hourDuration}`
    div_duration.append(p_Mduration, p_Hduration)
    div_duration.style.border = '2px solid blue'
    div_duration.style.marginBottom = '10px'
    div_duration.style.justifyContent = 'center'


    let div_modules = document.createElement('div')
    div_modules.classList.add('modules')
    div_modules.style.display = 'flex'
    div_modules.style.justifyContent = 'flex-start'
    div_modules.style.flexDirection = 'column'
    div_modules.style.padding = '10px'
    for (const moduleElements of coursesArrayElement.modules) {
        let div_module = document.createElement('div')
        div_module.style.border = '2px solid blue'
        div_module.style.marginBottom = '5px'
        div_module.style.textAlign = 'center'
        let p_module = document.createElement('p')
        p_module.innerText = `${moduleElements}`
        div_module.appendChild(p_module)
        div_modules.appendChild(div_module)

    }
    div_modules.style.border = '2px solid blue'

    div_block.append(div_title,div_duration, div_modules)
    div_main_task61.append(div_block)
}