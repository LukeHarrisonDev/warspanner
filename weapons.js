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
        this.range = 12
        this.balisticSkill = 4
    }
}

class MeleeWeapon extends Weapon{
    constructor(name) {
        super(name)
        this.weaponSkill = 4
    }
}

module.exports = {
    Weapon,
    RangedWeapon,
    MeleeWeapon
}