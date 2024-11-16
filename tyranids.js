const {
    Model
} = require("./model.js")

class Termagant extends Model {
    constructor() {
        super()
        this.name = "Termagant"
        this.move = 6
    }
}

module.exports = {
    Termagant,
}