ServerEvents.recipes(event => {
    event.shaped("16x pipez:item_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:lead_plate",
        B: "minecraft:hopper",
        C: "alltheores:steel_gear"
    }).id("pipez:item_pipe")

    event.shaped("16x pipez:fluid_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:lead_plate",
        B: "minecraft:bucket",
        C: "alltheores:tin_gear"
    }).id("pipez:fluid_pipe")

    event.shaped("16x pipez:energy_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:lead_plate",
        B: "minecraft:redstone_block",
        C: "alltheores:copper_gear"
    }).id("pipez:energy_pipe")

    event.shaped("6x pipez:universal_pipe", [
        "ABC",
        "DED",
        "ABC"
    ], {
        A: "pipez:item_pipe",
        B: "pipez:fluid_pipe",
        C: "pipez:energy_pipe",
        D: "minecraft:iron_ingot",
        E: "alltheores:brass_gear"
    }).id("pipez:universal_pipe")
})

RecipeViewerEvents.removeEntries("item", event => {
    event.remove("pipez:gas_pipe")
})