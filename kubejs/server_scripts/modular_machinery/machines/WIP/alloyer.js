MMREvents.machines(event => {
    event.create("mmr:alloyer").name("Alloyer")
        .color("#FFddff54")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["cba"],
                        ["bmb"]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:inputbus_tiny"],
                        "b": ["modular_machinery_reborn:casing_plain"],
                        "c": ["modular_machinery_reborn:outputbus_tiny"],
                    }
                )
        )
})

ServerEvents.recipes(event => {
    alloyer_recipe(event, "invar", ["2x minecraft:iron_ingot", "alltheores:nickel_ingot"], "3x alltheores:invar_ingot")
    alloyer_recipe(event, "electrum", ["minecraft:gold_ingot", "alltheores:silver_ingot"], "2x alltheores:electrum_ingot")
    alloyer_recipe(event, "bronze", ["3x minecraft:copper_ingot", "alltheores:tin_ingot"], "4x alltheores:bronze_ingot")
    alloyer_recipe(event, "brass", ["3x minecraft:copper_ingot", "alltheores:zinc_ingot"], "4x alltheores:brass_ingot")
    alloyer_recipe(event, "constantan", ["minecraft:copper_ingot", "alltheores:nickel_ingot"], "2x alltheores:constantan_ingot")
    alloyer_recipe(event, "lumium", ["4x minecraft:glowstone_dust", "alltheores:silver_ingot", "3x alltheores:tin_ingot"], "4x alltheores:lumium_ingot")
    alloyer_recipe(event, "signalum", ["3x minecraft:copper_ingot", "alltheores:silver_ingot", "4x #c:dusts/redstone"], "4x alltheores:signalum_ingot")
    alloyer_recipe(event, "steel", ["minecraft:iron_ingot", "minecraft:coal"], "alltheores:steel_ingot")
    alloyer_recipe(event, "netherite", ["minecraft:netherite_scrap", "minecraft:gold_ingot"], "minecraft:netherite_ingot")
})

function alloyer_recipe(event, id, input, output) {
    let recipe = event.recipes.modular_machinery_reborn.machine_recipe("mmr:alloyer", 60)
    recipe.progressX(input.length <= 3 ? ((input.length + 1) * 20) : 80)
    recipe.progressY(0)
    recipe.width(122)
    recipe.height(80)
    recipe.requireEnergy(16)
    let pos_x = 0
    let pos_y = 0
    for (let i in input) {
        pos_x += 20
        pos_x == 80 ? (pos_x = 20, pos_y += 20) : {}
        recipe.requireItem(input[i], pos_x, pos_y)
    }

    input.length <= 3 ?
        recipe.produceItem(output, ((input.length + 1) * 20) + 26, 0) :
        recipe.produceItem(output, 106, 0)
}