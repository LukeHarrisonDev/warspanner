class Weapon {
    constructor() {
        this.attacks = 1
        this.strength = 5
        this.ap = 0
        this.damage = 1
    }
}

class RangedWeapon extends Weapon{
    constructor() {
        super()
        this.type = "ranged"
        this.range = 12
        this.balisticSkill = 4
    }
}

class MeleeWeapon extends Weapon{
    constructor(name) {
        super(name)
        this.type = "melee"
        this.weaponSkill = 4
    }
}

module.exports = {
    Weapon,
    RangedWeapon,
    MeleeWeapon
}