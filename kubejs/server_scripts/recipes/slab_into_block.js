ServerEvents.recipes(event => {
    let input, output
    event.forEachRecipe({ "type": "minecraft:crafting_shaped", "output": "#minecraft:slabs" }, element => {
        element.getOriginalRecipeIngredients().forEach(ingredient => {
            input = ingredient.itemIds
        })
        output = element.getOriginalRecipeResult().item.id

        event.shapeless(input[0], "2x " + output).id("tectonica:" + output.split(":")[1] + "_into_block")
    })

    event.shapeless("minecraft:crafting_table", "2x craftingstation:crafting_station_slab").id("tectonica:crafting_station_slab_into_block")
})