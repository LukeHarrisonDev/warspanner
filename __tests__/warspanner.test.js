const { Weapon, RangedWeapon, MeleeWeapon } = require("../weapons.js")
const { Fleshborer, ChitinousClawsAndTeeth } = require("../tyranidWeapons.js")
const { Model } = require("../model.js")

describe("Weapons", () => {
    describe("Weapon", () => {
        test("Has set values by default", () => {
            const testWeapon = new Weapon()
            expect(testWeapon).toMatchObject({
                attacks: 1,
                strength: 5,
                ap: 0,
                damage: 1
            })
        })
    })
    describe("RangedWeapon", () => {
        test("Takes properties from 'Weapon' and has additional 'range' and 'balisticSkill' properties", () => {
            const testRangedWeapon = new RangedWeapon()
            expect(testRangedWeapon).toMatchObject({
                attacks: 1,
                range: 12,
                balisticSkill: 4,
                strength: 5,
                ap: 0,
                damage: 1
            })
        })
    })
    describe("MeleeWeapon", () => {
        test("Takes properties from 'Weapon' and has additional 'weaponSkill' property", () => {
            const testMeleeWeapon = new MeleeWeapon()
            expect(testMeleeWeapon).toMatchObject({
                attacks: 1,
                weaponSkill: 4,
                strength: 5,
                ap: 0,
                damage: 1
            })
        })
    })
    describe("TyranidWeapons", () => {
        describe("Fleshborer", () => {
            test("Has a name property of 'Fleshborer' and properties inherited from RangedWeapon", () => {
                const testFleshborer = new Fleshborer()
                expect(testFleshborer).toMatchObject({
                    name: "Fleshborer",
                    attacks: 1,
                    range: 18,
                    balisticSkill: 4,
                    strength: 5,
                    ap: 0,
                    damage: 1
                })
            })
        })
        describe("ChitinousClawsAndTeeth", () => {
            test("Has a name property of 'Chitinous claws and teeth' and properties inherited from 'MeleeWeapon'", () => {
                const testChitinousClawsAndTeeth = new ChitinousClawsAndTeeth()
                expect(testChitinousClawsAndTeeth).toMatchObject({
                    name: "Chitinous claws and teeth",
                    attacks: 1,
                    weaponSkill: 4,
                    strength: 3,
                    ap: 0,
                    damage: 1
                })
            })
        })
    })
})

describe("Model", () => {
    test("Has set values and properties by default", () => {
        const testModel = new Model()
        expect(testModel).toMatchObject({
           move: 6,
           toughness: 3,
           save: 5,
           wounds: 1,
           leadership: 8,
           objectiveControl: 2
        })
    })
})

