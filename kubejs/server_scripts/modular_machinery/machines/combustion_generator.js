MMREvents.machines(event => {
    event.create("mmr:combustion_generator").name("Combustion Generator")
        .color("#FFfefdc2")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aba", "aca"],
                        ["ama", "eae"],
                        ["ded", "   "]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": ["#modular_machinery_reborn:inputbus"],
                        "c": ["#modular_machinery_reborn:energyoutputhatch"],
                        "d": ["modular_machinery_reborn:casing_vent"],
                        "e":["minecraft:iron_bars"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:combustion_generator", 1200)
        .progressX(20)
        .progressY(0)
        .width(130)
        .height(80)
        .requireItem("#minecraft:coals", 0, 0)
        .produceEnergy(64, 44, 0)
})