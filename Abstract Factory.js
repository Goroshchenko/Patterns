class Character {
    constructor(race, health, attack) {
        this.race = race;
        this.health = health;
        this.attack = attack;
    }
}
class Man extends  Character{

    factory(race) {
        return new Man(race, 1000, 200)
    }
        weapon(){
            return new Weapons('sword')
        }
}
class Elf extends  Character{

    factory(race) {
        return new Elf(race, 2000, 100)
    }
    weapon(){
        return new Weapons('arch')
    }
}
class Dwarf extends  Character{

    factory(race) {
        return  new Dwarf(race, 1500, 150)
    }
    weapon(){
        return new Weapons('axe')
    }
}

function Weapons(type) {
    this.type = type;
}

function factory(race){
    if (race === 'man')
      return new Man().factory(race)
    if (race === 'elf')
        return new Elf().factory(race)
    if (race === 'dwarf')
        return new Dwarf().factory(race)
}

const man = factory('man'),
    elf = factory('elf'),
    dwarf = factory('dwarf')

console.log(man,'\n', elf, '\n', dwarf) // Character { race: 'man', health: 1000, attack: 200 }
                                                            // Character { race: 'elf', health: 2000, attack: 100 }
                                                            // Character { race: 'dwarf', health: 1500, attack: 150 }

console.log(man.weapon(), '\n', elf.weapon(), '\n', dwarf.weapon()) // Weapons { type: 'sword' }
                                                                    //  Weapons { type: 'arch' }
                                                                    //  Weapons { type: 'axe' }