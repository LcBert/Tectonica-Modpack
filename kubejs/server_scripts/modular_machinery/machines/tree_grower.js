MMREvents.machines(event => {
    event.create("mmr:tree_grower").name("Tree Grower")
        .color("#FF909090")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        [" aaeaa ", "accccca", "accccca", "acccccd", "accccca", "accccca", " aabaa "],
                        [" aamaa ", "aggggga", "aggggga", "agghgga", "aggggga", "aggggga", " aaaaa "],
                        [" iaaai ", "igjjjgi", "ijjjjji", "ijjjjji", "ijjjjji", "igjjjgi", " iiiii "],
                        [" iiiii ", "igggggi", "igjjjgi", "igjjjgi", "igjjjgi", "igggggi", " iiiii "],
                        ["  iii  ", " igggi ", "iggjggi", "igjjjgi", "iggjggi", " igggi ", "  iii  "],
                        ["   i   ", "  iii  ", " iifii ", "iifffii", " iifii ", "  iii  ", "   i   "]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": ["#modular_machinery_reborn:energyinputhatch"],
                        "c": ["minecraft:grass_block", "minecraft:dirt"],
                        "d": ["#modular_machinery_reborn:fluidinputhatch"],
                        "e": ["#modular_machinery_reborn:outputbus"],
                        "f": ["modular_machinery_reborn:casing_vent"],
                        "g": ["minecraft:air"],
                        "h": ["minecraft:oak_log[axis=y]"],
                        "i": ["minecraft:glass"],
                        "j": ["minecraft:oak_leaves"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:tree_grower", 100)
        .progressX(40)
        .progressY(0)
        .width(130)
        .height(80)
        .requireEnergy(128)
        .requireFluid(Fluid.of("minecraft:water", 100), 20, 0)
        .produceItem("minecraft:oak_log", 66, 0)
        .produceItem("minecraft:stick", 0.33, 86, 0)
        .produceItem("minecraft:oak_leaves", 0.33, 66, 20)
        .produceItem("minecraft:apple", 0.33, 86, 20)
})