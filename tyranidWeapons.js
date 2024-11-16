const {
    RangedWeapon,
    MeleeWeapon,
} = require("./weapons")

class Fleshborer extends RangedWeapon {
    constructor(){
        super()
        this.name = "Fleshborer"
        this.range = 18
    }
}

class ChitinousClawsAndTeeth extends MeleeWeapon {
    constructor(){
        super()
        this.name = "Chitinous claws and teeth"
        this.strength = 3
    }
}

module.exports = { Fleshborer, ChitinousClawsAndTeeth }