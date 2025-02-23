ServerEvents.recipes(event => {
    event.remove({ "id": "minecraft:netherite_ingot" })

    event.shapeless("alltheores:steel_dust", ["alltheores:iron_dust", "tectonica:coal_dust"]).id("tectonica:steel_dust")
    event.shapeless("4x alltheores:enderium_dust", ["4x alltheores:lead_dust", "2x alltheores:osmium_dust", "alltheores:diamond_dust", "minecraft:ender_pearl"]).id("tectonica:enderium_dust")
    event.shapeless("alltheores:netherite_dust", ["4x minecraft:netherite_scrap", "4x alltheores:gold_dust"]).id("tectonica:netherite_dust")

    event.shapeless("minecraft:coal", "4x tectonica:coal_dust").id("tectonica:coal")
    event.shapeless("minecraft:lapis_lazuli", "4x alltheores:sapphire_dust").id("tectonica:lapis_lazuli")
    event.shapeless("minecraft:diamond", "9x alltheores:diamond_dust").id("tectonica:diamond")
    event.shapeless("minecraft:emerald", "9x alltheores:peridot_dust").id("tectonica:emerald")
})