ServerEvents.recipes(event => {
    event.shaped("tectonica:hammer", [
        " AA",
        " BA",
        "B  "
    ], {
        A: "modular_machinery_reborn:modularium",
        B: "minecraft:stick"
    }).id("tectonica:hammer")

    event.shaped("tectonica:reinforced_hammer", [
        " AA",
        " BA",
        "B  "
    ], {
        A: "modular_machinery_reborn:casing_reinforced",
        B: "alltheores:netherite_rod"
    }).id("tectonica:reinforced_hammer")

    let recipes = [
        { input: "minecraft:iron_ingot", plate: "alltheores:iron_plate", rod: "alltheores:iron_rod", gear: "alltheores:iron_gear" },
        { input: "minecraft:copper_ingot", plate: "alltheores:copper_plate", rod: "alltheores:copper_rod", gear: "alltheores:copper_gear" },
        { input: "minecraft:gold_ingot", plate: "alltheores:gold_plate", rod: "alltheores:gold_rod", gear: "alltheores:gold_gear" },
        { input: "alltheores:aluminum_ingot", plate: "alltheores:aluminum_plate", rod: "alltheores:aluminum_rod", gear: "alltheores:aluminum_gear" },
        { input: "alltheores:lead_ingot", plate: "alltheores:lead_plate", rod: "alltheores:lead_rod", gear: "alltheores:lead_gear" },
        { input: "alltheores:nickel_ingot", plate: "alltheores:nickel_plate", rod: "alltheores:nickel_rod", gear: "alltheores:nickel_gear" },
        { input: "alltheores:osmium_ingot", plate: "alltheores:osmium_plate", rod: "alltheores:osmium_rod", gear: "alltheores:osmium_gear" },
        { input: "alltheores:platinum_ingot", plate: "alltheores:platinum_plate", rod: "alltheores:platinum_rod", gear: "alltheores:platinum_gear" },
        { input: "alltheores:silver_ingot", plate: "alltheores:silver_plate", rod: "alltheores:silver_rod", gear: "alltheores:silver_gear" },
        { input: "alltheores:tin_ingot", plate: "alltheores:tin_plate", rod: "alltheores:tin_rod", gear: "alltheores:tin_gear" },
        { input: "alltheores:uranium_ingot", plate: "alltheores:uranium_plate", rod: "alltheores:uranium_rod", gear: "alltheores:uranium_gear" },
        { input: "alltheores:zinc_ingot", plate: "alltheores:zinc_plate", rod: "alltheores:zinc_rod", gear: "alltheores:zinc_gear" },
        { input: "alltheores:iridium_ingot", plate: "alltheores:iridium_plate", rod: "alltheores:iridium_rod", gear: "alltheores:iridium_gear" },
        { input: "alltheores:steel_ingot", plate: "alltheores:steel_plate", rod: "alltheores:steel_rod", gear: "alltheores:steel_gear" },
        { input: "alltheores:invar_ingot", plate: "alltheores:invar_plate", rod: "alltheores:invar_rod", gear: "alltheores:invar_gear" },
        { input: "alltheores:bronze_ingot", plate: "alltheores:bronze_plate", rod: "alltheores:bronze_rod", gear: "alltheores:bronze_gear" },
        { input: "alltheores:electrum_ingot", plate: "alltheores:electrum_plate", rod: "alltheores:electrum_rod", gear: "alltheores:electrum_gear" },
        { input: "alltheores:enderium_ingot", plate: "alltheores:enderium_plate", rod: "alltheores:enderium_rod", gear: "alltheores:enderium_gear" },
        { input: "alltheores:constantan_ingot", plate: "alltheores:constantan_plate", rod: "alltheores:constantan_rod", gear: "alltheores:constantan_gear" },
        { input: "alltheores:brass_ingot", plate: "alltheores:brass_plate", rod: "alltheores:brass_rod", gear: "alltheores:brass_gear" },
        { input: "alltheores:signalum_ingot", plate: "alltheores:signalum_plate", rod: "alltheores:signalum_rod", gear: "alltheores:signalum_gear" },
        { input: "alltheores:lumium_ingot", plate: "alltheores:lumium_plate", rod: "alltheores:lumium_rod", gear: "alltheores:lumium_gear" },
        { input: "minecraft:netherite_ingot", plate: "alltheores:netherite_plate", rod: "alltheores:netherite_rod", gear: "alltheores:netherite_gear" },
        { input: "extendedcrafting:black_iron_ingot", plate: "extendedcrafting:black_iron_slate" }
    ]

    recipes.forEach(recipe => {
        if (recipe.plate != undefined) {
            event.shaped(recipe.plate, [
                "AB"
            ], {
                A: "#tectonica:hammer",
                B: recipe.input
            }).id("tectonica:hammer/crafting/" + recipe.plate.split(":")[1]).damageIngredient(0, 1)
        }

        if (recipe.rod != undefined) {
            event.shaped(recipe.rod, [
                "B",
                "B",
                "A"
            ], {
                A: "#tectonica:hammer",
                B: recipe.input
            }).id("tectonica:hammer/crafting/" + recipe.rod.split(":")[1]).damageIngredient(2, 1)
        }

        if (recipe.gear != undefined) {
            event.shaped(recipe.gear, [
                " B ",
                "BAB",
                " B "
            ], {
                A: "#tectonica:hammer",
                B: recipe.input
            }).id("tectonica:hammer/crafting/" + recipe.gear.split(":")[1]).damageIngredient(4, 1)
        }
    })
})
