const { Weapon, RangedWeapon, MeleeWeapon } = require("../weapons.js")
const { Fleshborer, ChitinousClawsAndTeeth } = require("../tyranidWeapons.js")
const { Model } = require("../model.js")
const { Termagant } = require("../tyranids.js")

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
    test("Has set properties by default", () => {
        const testModel = new Model()
        expect(testModel).toMatchObject({
           move: 12,
           toughness: 3,
           save: 5,
           wounds: 1,
           leadership: 8,
           objectiveControl: 2
        })
    })
})

describe("Tyranid Models", () => {
    describe("Termegant", () => {
        test("Has a name property of 'Termagant' and properties inherited from 'Model'", () => {
            const testTermagant = new Termagant()
            expect(testTermagant).toMatchObject({
                name: "Termagant",
                move: 6,
                toughness: 3,
                save: 5,
                wounds: 1,
                leadership: 8,
                objectiveControl: 2
            })
        })
        test("Has a 'Fleshborer' ranged weapon that keeps its properties", () => {
            const testFleshborer = new Fleshborer()
            const testTermagant = new Termagant(testFleshborer)
            expect(testTermagant.rangedWeapon).toMatchObject({
                name: "Fleshborer",
                attacks: 1,
                range: 18,
                balisticSkill: 4,
                strength: 5,
                ap: 0,
                damage: 1
            })
        })
        test("Has 'ChitinousClawsAndTeeth' melee weapon that keeps its properties", () => {
            const testFleshborer = new Fleshborer()
            const testChitinousClawsAndTeeth = new ChitinousClawsAndTeeth()
            const testTermagant = new Termagant(testFleshborer, testChitinousClawsAndTeeth)
            expect(testTermagant.meleeWeapon).toMatchObject({
                name: "Chitinous claws and teeth",
                attacks: 1,
                weaponSkill: 4,
                strength: 3,
                ap: 0,
                damage: 1
            })
        })
        test("When creating a Termagant, only a ranged weapon can go in the ranged slot", () => {
            const testFleshborer = new Fleshborer()
            const testChitinousClawsAndTeeth = new ChitinousClawsAndTeeth()
            const testTermagant = new Termagant(testChitinousClawsAndTeeth, testFleshborer)
            expect(testTermagant.rangedWeapon.name).toBe("Fleshborer")
        })
        test("When creating a Termagant, only a melee weapon can go in the melee slot", () => {
            const testFleshborer = new Fleshborer()
            const testChitinousClawsAndTeeth = new ChitinousClawsAndTeeth()
            const testTermagant = new Termagant(testChitinousClawsAndTeeth, testFleshborer)
            expect(testTermagant.meleeWeapon.name).toBe("Chitinous claws and teeth")
        })
    })
})