ServerEvents.recipes(event => {
    event.remove("minecraft:bucket")
    event.recipes.extendedcrafting.shaped_table("minecraft:bucket", [
        "A A",
        " A "
    ], {
        A: "alltheores:invar_plate"
    }).id("tectonica:bucket")

    event.remove("clickmachine:click_machine")
    event.recipes.extendedcrafting.shaped_table("clickmachine:click_machine", [
        "AAA",
        "ABC",
        "AAA"
    ], {
        A: "minecraft:stone_bricks",
        B: "minecraft:redstone_block",
        C: "minecraft:piston"
    }).id("tectonica:clickmachine/click_machine")

    event.shapeless("4x minecraft:string", "#minecraft:wool").id("tectonica:string_from_wool")

    event.remove("factory_blocks:factory")
    event.shaped("32x factory_blocks:factory", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "alltheores:iron_plate",
        B: "minecraft:smooth_stone"
    }).id("tectonica:factory_block/factory")
})