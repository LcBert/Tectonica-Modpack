ServerEvents.recipes(event => {
    event.remove("pipez:item_pipe")
    event.remove("pipez:fluid_pipe")
    event.remove("pipez:energy_pipe")
    event.remove("pipez:universal_pipe")

    event.shaped("16x pipez:item_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:aluminum_plate",
        B: "minecraft:hopper",
        C: "alltheores:steel_gear"
    }).id("tectonica:pipez_item_pipe")

    event.shaped("16x pipez:fluid_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:aluminum_plate",
        B: "minecraft:bucket",
        C: "alltheores:tin_gear"
    }).id("tectonica:pipez_fluid_pipe")

    event.shaped("16x pipez:energy_pipe", [
        "AAA",
        "BCB",
        "AAA"
    ], {
        A: "alltheores:aluminum_plate",
        B: "minecraft:redstone_block",
        C: "alltheores:copper_gear"
    }).id("tectonica:pipez_energy_pipe")

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
    }).id("tectonica:pipez_universal_pipe")
})

RecipeViewerEvents.removeEntries("item", event => {
    event.remove("pipez:gas_pipe")
})