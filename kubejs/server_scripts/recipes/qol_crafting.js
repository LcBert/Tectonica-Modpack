ServerEvents.recipes(event => {
    event.shaped("16x minecraft:stick", [
        "A",
        "A"
    ], {
        A: "#minecraft:logs"
    }).id("tectonica:qol_crafting/stick")

    event.shaped("4x minecraft:chest", [
        "AAA",
        "A A",
        "AAA"
    ], {
        A: "#minecraft:logs"
    }).id("tectonica:qol_crafting/chest")

    event.shaped("minecraft:hopper", [
        "ABA",
        "ABA",
        " A "
    ], {
        A: "minecraft:iron_ingot",
        B: "#minecraft:logs"
    }).id("tectonica:qol_crafting/hopper")
})