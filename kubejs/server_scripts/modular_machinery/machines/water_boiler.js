MMREvents.machines(event => {
    event.create("mmr:water_boiler").name("Water Boiler")
        .color("#FF808080")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aaa", "aga", "aba"],
                        [" m ", "edc", " a "],
                        ["   ", "afa", "   "]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": ["#modular_machinery_reborn:energyinputhatch"],
                        "c": ["#modular_machinery_reborn:fluidinputhatch"],
                        "d": ["minecraft:cauldron"],
                        "e": ["#modular_machinery_reborn:outputbus"],
                        "f": ["modular_machinery_reborn:casing_vent"],
                        "g": ["modular_machinery_reborn:casing_firebox"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:water_boiler", 60)
        .progressX(40)
        .progressY(0)
        .width(122)
        .height(80)
        .requireEnergy(128)
        .requireFluid(Fluid.of("minecraft:water", 100), 20, 0)
        .produceItem("alltheores:salt", 66, 0)
})