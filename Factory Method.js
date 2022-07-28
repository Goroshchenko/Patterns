class Character {
    constructor(race, health, level, attack) {
        this.health = health;
        this.level = level;
        this.attack = attack;
    }
}
class CharacterFactory {
    create(race){
        if (race === 'man')
            return new Character(race, 1000, 100, 10)
        if (race === 'elf')
            return new Character(race, 2000, 200, 20)

    }
}

const factory = new CharacterFactory();
const man = factory.create('man')
const elf = factory.create('elf')
console.log(man, elf)