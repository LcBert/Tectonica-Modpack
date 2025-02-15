
MMREvents.machines(event => {
    event.create("mmr:electric_furnace").name("Electric Furnace")
        .color("#FF4d4d4d")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aaa", "ecd", "aba"],
                        ["ama", "aaa", "aaa"],
                        ["f f", "   ", "f f"]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": ["#modular_machinery_reborn:energyinputhatch"],
                        "c": ["modular_machinery_reborn:casing_firebox"],
                        "d": ["#modular_machinery_reborn:inputbus"],
                        "e": ["#modular_machinery_reborn:outputbus"],
                        "f": ["modular_machinery_reborn:casing_vent"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    let input, output
    event.forEachRecipe({ "type": "minecraft:smelting", "input": "#c:dusts", "output": "#c:ingots" }, element => {
        element.getOriginalRecipeIngredients().forEach(ingredient => {
            input = ingredient.itemIds
        })
        output = element.getOriginalRecipeResult().item.id

        event.recipes.modular_machinery_reborn.machine_recipe("mmr:electric_furnace", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(input, 20, 0)
            .produceItem(output, 66, 0)
    })

})