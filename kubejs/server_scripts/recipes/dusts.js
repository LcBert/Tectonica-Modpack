ServerEvents.recipes(event => {
    event.remove({ "id": "minecraft:netherite_ingot" })

    event.shapeless("alltheores:steel_dust", ["alltheores:iron_dust", "tectonica:coal_dust"]).id("tectonica:steel_dust")
    event.shapeless("alltheores:netherite_dust", ["4x minecraft:netherite_scrap", "4x alltheores:gold_dust"]).id("tectonica:netherite_dust")
})