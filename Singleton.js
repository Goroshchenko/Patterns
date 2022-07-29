
class Boss {
    constructor(name, level) {
        if (typeof Boss.unit === 'object') {
            return Boss.unit
        }
        Boss.unit = this
        this.name = name
        this.level = level
    }
}
boss = new Boss('boss', 0)
boss1 = new Boss('boss1', 1)
boss2 = new Boss('boss2', 2)

console.log(boss1, '\n', boss2) // Boss { name: 'boss', level: 0 }
                                // Boss { name: 'boss', level: 0 }

