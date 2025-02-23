ServerEvents.recipes(event => {
    event.remove("minecraft:bucket")
    event.recipes.extendedcrafting.shaped_table("minecraft:bucket", [
        "A A",
        " A "
    ], {
        A: "alltheores:aluminum_plate"
    })

    event.remove("clickmachine:click_machine")
    event.recipes.extendedcrafting.shaped_table("clickmachine:click_machine", [
        "AAA",
        "ABC",
        "AAA"
    ], {
        A: "minecraft:stone_bricks",
        B: "minecraft:redstone_block",
        C: "minecraft:piston"
    })
})