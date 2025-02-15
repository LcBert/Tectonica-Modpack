ServerEvents.recipes(event => {
    event.shaped("32x factory_blocks:factory", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "alltheores:iron_plate",
        B: "minecraft:smooth_stone"
    }).id("factory_blocks:factory")
})