ServerEvents.recipes(event => {
    event.remove({ mod: "extendedcrafting" })

    event.shapeless("extendedcrafting:black_iron_ingot", ["alltheores:steel_ingot", "tectonica:coal_dust"])

    event.shaped("extendedcrafting:basic_catalyst", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "extendedcrafting:black_iron_slate",
        B: "minecraft:redstone_block"
    })

    event.shaped("extendedcrafting:basic_table", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "modular_machinery_reborn:casing_plain",
        B: "minecraft:crafting_table",
        C: "extendedcrafting:basic_catalyst"
    })
})

RecipeViewerEvents.removeEntries("item", event => {
    let blacklist_items = [
        "extendedcrafting:black_iron_ingot",
        "extendedcrafting:black_iron_slate",
        "extendedcrafting:basic_catalyst",
        "extendedcrafting:basic_table"
    ]
    Item.getList().forEach(item => {
        if (item.mod == "extendedcrafting") {
            if (!blacklist_items.includes(item.id)) event.remove(item.id)
        }
    })
})