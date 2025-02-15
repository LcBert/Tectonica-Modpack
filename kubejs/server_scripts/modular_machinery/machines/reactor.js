MMREvents.machines(event => {
    event.create("mmr:reactor").name("Reactor")
        .color("#FF505050")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aaaaa", "aaaaa", "caaad", "aaaaa", "aabaa"],
                        ["aemea", "efgfe", "egfge", "efgfe", "aeeea"],
                        ["aeeea", "efgfe", "egfge", "efgfe", "aeeea"],
                        ["aeeea", "efgfe", "egfge", "efgfe", "aeeea"],
                        ["aehea", "efgfe", "egfge", "efgfe", "aeeea"],
                        ["aaaaa", "aiaia", "aaiaa", "aiaia", "aaaaa"]
                    ]
                )
                .keys(
                    {
                        "a": ["tectonica:reactor_casing"],
                        "b": ["#tectonica:fluidinputhatch/tier/4"],
                        "c": ["#tectonica:outputbus/tier/4"],
                        "d": ["#tectonica:inputbus/tier/4"],
                        "e": ["#tectonica:reactor_casings"],
                        "f": ["tectonica:reactor_rod"],
                        "g": ["minecraft:air"],
                        "h": ["#tectonica:energyoutputhatch/tier/4"],
                        "i": ["modular_machinery_reborn:casing_vent"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:reactor", 1200)
        .progressX(60)
        .progressY(20)
        .width(102)
        .height(100)
        .requireItem("alltheores:uranium_ingot", 20, 0)
        .requireItem("minecraft:redstone", 0, 20)
        .requireItem("minecraft:coal", 40, 20)
        .requireFluid(Fluid.of("minecraft:water", 500), 20, 40)
        .produceEnergy(1024, 86, 0)

    event.recipes.modular_machinery_reborn.machine_recipe("mmr:reactor", 1200)
        .progressX(60)
        .progressY(20)
        .width(102)
        .height(100)
        .requireItem("alltheores:uranium_ingot", 20, 0)
        .requireItem("minecraft:redstone", 0, 20)
        .requireItem("minecraft:coal", 40, 20)
        .requireFluid(Fluid.of("tectonica:coolant", 1000), 20, 40)
        .produceEnergy(2048, 86, 0)
})