ServerEvents.recipes(event => {
    event.remove({ mod: "waystones" })

    event.shaped("waystones:attuned_shard", [
        "ABA",
        "B B",
        "ABA"
    ], {
        A: "waystones:warp_dust",
        B: "minecraft:flint"
    }).id("tectonica:attuned_shard")

    event.shaped("waystones:warp_stone", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "waystones:warp_dust",
        B: "waystones:attuned_shard"
    }).id("tectonica:warp_stone")

    event.shaped("waystones:waystone", [
        " A ",
        "ABA",
        "CCC"
    ], {
        A: "minecraft:stone_bricks",
        B: "waystones:attuned_shard",
        C: "minecraft:smooth_stone"
    }).id("tectonica:waystone")
})