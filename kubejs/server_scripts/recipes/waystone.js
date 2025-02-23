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

RecipeViewerEvents.removeEntries("item", event => {
    let blacklist_items = [
        "waystones:waystone",
        "waystones:warp_stone",
        "waystones:warp_dust",
        "waystones:attuned_shard"
    ]
    Item.getList().forEach(item => {
        if (item.mod == "waystones") {
            if (!blacklist_items.includes(item.id)) event.remove(item.id)
        }
    })
})

RecipeViewerEvents.addEntries("item", event => {
    event.add("waystones:attuned_shard")
})