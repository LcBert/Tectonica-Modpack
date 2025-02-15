ServerEvents.recipes(event => {
    event.shapeless("tectonica:dust_sample", ["tectonica:hammer", "tectonica:basic_raw_sample"]).id("tectonica:hammer/crushing/dust_sample").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)

    event.shapeless("minecraft:redstone", "3x tectonica:dust_sample").id("tectonica:dust_sample/redstone")
    event.shapeless("minecraft:glowstone_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/glowstone_dust")
    event.shapeless("waystones:warp_dust", "3x tectonica:dust_sample").id("tectonica:dust_sample/warp_dust")

})