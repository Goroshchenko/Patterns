class Weapons {
    constructor(item) {
        this.item = item
    }
}
class Iterator {
    constructor(item) {
        this.items = item
        this.index = 0
    }
    nextItem() {
        return this.items[this.index++]
}
    nextItemExists(){
        return (this.index < this.items.length)
    }
}
const sword = new Weapons('sword'),
arch = new Weapons('arch'),
axe = new Weapons('axe'),
Collection = new Iterator([sword, arch, axe])

while (Collection.nextItemExists()) {
    console.log(Collection.nextItem())  // Weapons { item: 'sword' }
}                                       // Weapons { item: 'arch' }
                                        // Weapons { item: 'axe' }

