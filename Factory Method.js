function Character(race, health, attack) {
        this.race = race;
        this.health = health;
        this.attack = attack;
    }


    function CharacterFactory(race){
        if (race === 'man')
            return new Character(race, 1000, 200)
        if (race === 'elf')
            return new Character(race, 2000, 100)
        if (race === 'dwarf')
            return new Character(race, 1500, 150)
    }

const man = CharacterFactory('man'),
      elf = CharacterFactory('elf'),
      dwarf = CharacterFactory('dwarf')
console.log(man,'\n', elf, '\n', dwarf) // Character { race: 'man', health: 1000, attack: 200 }
                                        // Character { race: 'elf', health: 2000, attack: 100 }
                                        // Character { race: 'dwarf', health: 1500, attack: 150 }