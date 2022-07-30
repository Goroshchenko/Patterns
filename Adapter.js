class Weapons {
    takeWeapons(){
        console.log('attack +10');
    }
}
class Armor {
    putArmor() {
        console.log('Defence +10')
    }
}
class ArmorAdapter {
    constructor(item) {
        this.item = item;
    }
    takeWeapons() {
        this.item.putArmor();
    }
}
class Character {
    chooseItem(item) {
        item.takeWeapons()
    }
}
const hero = new Character()
const hero_item = new Weapons()

hero.chooseItem(hero_item)

const enemy = new Character()
const enemy_item = new ArmorAdapter(new Armor())
enemy.chooseItem(enemy_item)


