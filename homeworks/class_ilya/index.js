/*
class Characters{
    constructor(name, surname, weapon, status, side, universe) {
        this.name = name;
        this.surname = surname;
        this.weapon = weapon;
        this.status = status;
        this.side = side;
        this.universe = universe;
    }

    static display_info(arr){
        let div_main = document.createElement('div')
        document.body.appendChild(div_main)
        div_main.style.display = 'flex'
        div_main.style.justifyContent = 'center'
        div_main.style.alignItems = 'center'
        div_main.style.flexWrap = 'wrap'
        div_main.style.width = '700px'
        div_main.style.gap = '5px'
        div_main.style.marginBottom = '10px'

        for (const arrElement of arr) {
            let div_block = document.createElement('div')
            div_block.style.width = '200px'
            div_block.style.backgroundColor = 'lightgray'
            div_block.style.padding = '10px'
            let p1 = document.createElement('p')
            p1.innerText = `${arrElement.name} ${arrElement.surname}`
            let p2 = document.createElement('p')
            p2.innerText = `Universe - ${arrElement.universe}`
            let ul = document.createElement('ul')
            const list = ['weapon', 'side', 'status']
            for (const listElement of list) {
                let li = document.createElement('li')
                li.innerText = `${listElement} - ${arrElement[listElement]}`
                ul.append(li)
            }
            div_block.append(p1,p2, ul)
            div_main.appendChild(div_block)
        }
    }

    transportToUniverse(name_universe){
        this.universe = name_universe
    }

    console_info(){
        console.log(`${this.name} ${this.surname} - Universe: ${this.universe}`);
    }

}

class Warrior extends Characters{
    constructor(name, surname, weapon, status, side, universe, specialSkill) {
        super(name, surname, weapon, status, side, universe);
        this.specialSkill = specialSkill;
    }

    SpecialSkill() {
        console.log(`${this.name} ${this.surname} skill - ${this.specialSkill}!`);
    }


}


const charactersArray = [
    new Characters('Jon', 'Snow', 'sword', 'alive', 'good', 'Game of Thrones'),
    new Characters('Aragorn', 'Elessar', 'sword', 'alive', 'good', 'Lord of the Rings'),
    new Characters('Ned', 'Stark', 'sword', 'dead', 'good', 'Game of Thrones'),
    new Characters('Frodo', 'Baggins', 'dagger', 'alive', 'good', 'Lord of the Rings'),
    new Characters('Cersei', 'Lannister', 'fists', 'dead', 'bad', 'Game of Thrones'),
    new Characters('Legolas', '', 'bow', 'alive', 'good', 'Lord of the Rings'),
    new Characters('Gandalf', 'White', 'staff', 'alive', 'good', 'Lord of the Rings'),
    new Characters('Saruman', '', 'staff', 'alive', 'bad', 'Lord of the Rings'),
    new Characters('Lurtz', '', 'sword', 'alive', 'bad', 'Lord of the Rings'),
    new Characters('Daenerys', 'Targaryen', 'dragons', 'alive', 'good', 'Game of Thrones'),
];

for (const characterEl of charactersArray) {
    characterEl.console_info()
}

let aragorn = new Warrior('Aragorn', 'Elessar', 'sword', 'alive', 'good', 'Lord of the Rings', 'swordsmanship')
aragorn.console_info()
aragorn.SpecialSkill()

Characters.display_info(charactersArray);

let filter = charactersArray.filter(obj => obj.universe === 'Lord of the Rings')
Characters.display_info(filter)

let character = new Characters('Sauron', 'Mayron', 'ring', 'dead', 'bad','Lord of the Rings')
character.transportToUniverse('Game of Thrones')
console.log(character)
charactersArray.push(character)

Characters.display_info(charactersArray)

Characters.prototype.side_func = function() {
    return `${this.name} is on the side of ${this.side}`;
};
for (const character of charactersArray) {
    console.log(character.side_func())}


function CharactersConstructor(name, surname, weapon, status, side, universe){
        this.name = name;
        this.surname = surname;
        this.weapon = weapon;
        this.status = status;
        this.side = side;
        this.universe = universe;

    this.info = function (arr){
        let div_main = document.createElement('div')
        document.body.appendChild(div_main)
        div_main.style.display = 'flex'
        div_main.style.justifyContent = 'center'
        div_main.style.alignItems = 'center'
        div_main.style.flexWrap = 'wrap'
        div_main.style.width = '700px'
        div_main.style.gap = '5px'
        div_main.style.marginBottom = '10px'

        for (const arrElement of arr) {
            let div_block = document.createElement('div')
            div_block.style.width = '200px'
            div_block.style.backgroundColor = 'lightgray'
            div_block.style.padding = '10px'
            let p1 = document.createElement('p')
            p1.innerText = `${arrElement.name} ${arrElement.surname}`
            let p2 = document.createElement('p')
            p2.innerText = `Universe - ${arrElement.universe}`
            let ul = document.createElement('ul')
            const list = ['weapon', 'side', 'status']
            for (const listElement of list) {
                let li = document.createElement('li')
                li.innerText = `${listElement} - ${arrElement[listElement]}`
                ul.append(li)
            }
            div_block.append(p1,p2, ul)
            div_main.appendChild(div_block)
        }
    }

    this.transportToUniverse = function (name_universe){
        this.universe = name_universe
    }

}
const charactersArray_for_functionContsr = [
    new CharactersConstructor('Jon', 'Snow', 'sword', 'alive', 'good', 'Game of Thrones'),
    new CharactersConstructor('Aragorn', 'Elessar', 'sword', 'alive', 'good', 'Lord of the Rings'),
    new CharactersConstructor('Ned', 'Stark', 'sword', 'dead', 'good', 'Game of Thrones'),
    new CharactersConstructor('Frodo', 'Baggins', 'dagger', 'alive', 'good', 'Lord of the Rings'),
    new CharactersConstructor('Cersei', 'Lannister', 'fists', 'dead', 'bad', 'Game of Thrones'),
    new CharactersConstructor('Legolas', '', 'bow', 'alive', 'good', 'Lord of the Rings'),
    new CharactersConstructor('Gandalf', 'White', 'staff', 'alive', 'good', 'Lord of the Rings'),
    new CharactersConstructor('Saruman', '', 'staff', 'alive', 'bad', 'Lord of the Rings'),
    new CharactersConstructor('Lurtz', '', 'sword', 'alive', 'bad', 'Lord of the Rings'),
    new CharactersConstructor('Daenerys', 'Targaryen', 'dragons', 'alive', 'good', 'Game of Thrones'),
];
charactersArray_for_functionContsr[0].info(charactersArray_for_functionContsr)


CharactersConstructor.prototype.side_func = function() {
    return `${this.name} is on the side of ${this.side}`;
};
for (const character of charactersArray_for_functionContsr) {
    console.log(character.side_func())
}
*/
