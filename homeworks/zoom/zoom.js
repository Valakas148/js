
/*class Character {
    constructor(name, surname, weapon, status, side, universe) {
        this.name = name;
        this.surname = surname;
        this.weapon = weapon;
        this.status = status;
        this.side = side;
        this.universe = universe;
    }

    console_info(){
        console.log(`${this.name} ${this.surname} - Universe: ${this.universe}`)
    }

    transport(name_universe){
        this.universe = name_universe
    }

    static display_info(arr){
        let div_main = document.createElement('div')
        document.body.appendChild(div_main)
        div_main.style.display = 'flex'
        div_main.style.justifyContent = 'center'
        div_main.style.alignItems = 'center'
        div_main.style.flexWrap = 'wrap'


        for ( const elements of arr) {
            let div_block = document.createElement('div')
            let p = document.createElement('p')
            p.innerText = `${elements.name} ${elements.surname}`
            let p1 = document.createElement('p')
            p1.innerText = `${elements.universe}`
            div_block.style.backgroundColor = 'gray'
            div_block.style.width = '200px'
            div_block.style.margin = '5px'

            let ul = document.createElement('ul')
            const list = ['weapon', 'side', 'status']
            for (const el of list) {
                let li = document.createElement('li')
                li.innerText = `${el} - ${elements[el]}`
                ul.appendChild(li)
            }
            div_block.append(p, p1, ul)
            div_main.appendChild(div_block)
        }
    }
}*/




/*

Character.display_info(charactersArr)
let chr = new Character('Jon', 'Snow', 'sword', 'alive', 'good', 'Game of Thrones')
*/
/*
for (const  elements of charactersArr) {
    elements.console_info()
}

Character.display_info(charactersArr)
let chr = new Character('Jon', 'Snow', 'sword', 'alive', 'good', 'Game of Thrones')
chr.transport('Lord of the Rings')
chr.console_info()

class Warrior extends Character{
    constructor(name, surname, weapon, status, side, universe, skill) {
        super(name, surname, weapon, status, side, universe)
        this.skill = skill;
    }

    specialSkill(){
        console.log(`${this.name} ${this.surname} skill - ${this.skill}`)
    }
}

let chr1 = new Warrior('Aragorn', 'Elessar', 'sword', 'alive', 'good', 'Lord of the Rings', 'swordmanship')

chr1.console_info()
chr1.specialSkill()*/

function Character(name, surname, weapon, status, side, universe) {
        this.name = name;
        this.surname = surname;
        this.weapon = weapon;
        this.status = status;
        this.side = side;
        this.universe = universe;

    this.console_info = function (){
        console.log(`${this.name} ${this.surname} - Universe: ${this.universe}`)
    }

    this.transport = function (name_universe){
        this.universe = name_universe
    }

    this.display_info = function (arr){
        let div_main = document.createElement('div')
        document.body.appendChild(div_main)
        div_main.style.display = 'flex'
        div_main.style.justifyContent = 'center'
        div_main.style.alignItems = 'center'
        div_main.style.flexWrap = 'wrap'


        for ( const elements of arr) {
            let div_block = document.createElement('div')
            let p = document.createElement('p')
            p.innerText = `${elements.name} ${elements.surname}`
            let p1 = document.createElement('p')
            p1.innerText = `${elements.universe}`
            div_block.style.backgroundColor = 'gray'
            div_block.style.width = '200px'
            div_block.style.margin = '5px'

            let ul = document.createElement('ul')
            const list = ['weapon', 'side', 'status']
            for (const el of list) {
                let li = document.createElement('li')
                li.innerText = `${el} - ${elements[el]}`
                ul.appendChild(li)
            }
            div_block.append(p, p1, ul)
            div_main.appendChild(div_block)
        }
    }
}
const charactersArr = [
    new Character('Jon', 'Snow', 'sword', 'alive', 'good', 'Game of Thrones'),
    new Character('Aragorn', 'Elessar', 'sword', 'alive', 'good', 'Lord of the Rings'),
    new Character('Ned', 'Stark', 'sword', 'dead', 'good', 'Game of Thrones'),
    new Character('Frodo', 'Baggins', 'dagger', 'alive', 'good', 'Lord of the Rings'),
    new Character('Cersei', 'Lannister', 'fists', 'dead', 'bad', 'Game of Thrones'),
    new Character('Legolas', '', 'bow', 'alive', 'good', 'Lord of the Rings'),
    new Character('Gandalf', 'White', 'staff', 'alive', 'good', 'Lord of the Rings'),
    new Character('Saruman', '', 'staff', 'alive', 'bad', 'Lord of the Rings'),
    new Character('Lurtz', '', 'sword', 'alive', 'bad', 'Lord of the Rings'),
    new Character('Daenerys', 'Targaryen', 'dragons', 'alive', 'good', 'Game of Thrones'),
];
charactersArr[0].display_info(charactersArr)

Character.prototype.side_func = function (){
    return `${this.name} side is ${this.side}`
}
for (const character of charactersArr) {
    console.log(character.side_func())
}