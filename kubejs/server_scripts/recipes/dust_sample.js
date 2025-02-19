ServerEvents.recipes(event => {
    event.shapeless("tectonica:dust_sample", ["tectonica:hammer", "tectonica:basic_raw_sample"]).id("tectonica:hammer/crushing/dust_sample").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)

    event.shapeless("tectonica:coal_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/coal_dust")
    event.shapeless("minecraft:glowstone_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/glowstone_dust")
    event.shapeless("waystones:warp_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/warp_dust")
    event.shapeless("alltheores:cinnabar_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/cinnabar_dust")
    event.shapeless("alltheores:sapphire_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/sapphire_dust")
    event.shapeless("alltheores:diamond_dust", "9x tectonica:dust_sample").id("tectonica:dust_sample/diamond_dust")
    event.shapeless("alltheores:peridot_dust", "9x tectonica:dust_sample").id("tectonica:dust_sample/peridot_dust")

})