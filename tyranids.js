const {
    Model
} = require("./model.js")

class Termagant extends Model {
    constructor(rangedWeapon = { type: "ranged" }, meleeWeapon = { type: "melee" }) {
        super()
        this.name = "Termagant"
        this.move = 6
        if(rangedWeapon.type === "ranged") {
            this.rangedWeapon = rangedWeapon
        } else if (meleeWeapon.type === "ranged") {
            this.rangedWeapon = meleeWeapon            
        }
        if(rangedWeapon.type === "melee") {
            this.meleeWeapon = rangedWeapon
        } else if (meleeWeapon.type === "melee") {
            this.meleeWeapon = meleeWeapon            
        }
    }
}

module.exports = {
    Termagant,
}