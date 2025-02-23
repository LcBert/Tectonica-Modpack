MMREvents.machines(event => {
    event.create("mmr:resource_extractor").name("Resource Extractor")
        .color("#FF7d7d7d")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aaa", "d c", "aba"],
                        ["eme", "afa", "eae"],
                        ["   ", " a ", "   "]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": ["#modular_machinery_reborn:energyinputhatch"],
                        "c": ["#modular_machinery_reborn:inputbus"],
                        "d": ["#modular_machinery_reborn:outputbus"],
                        "e": ["minecraft:iron_bars"],
                        "f": ["modular_machinery_reborn:casing_gearbox"]
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:resource_extractor", 60)
        .progressX(40)
        .progressY(0)
        .width(122)
        .height(80)
        .requireEnergy(64)
        .requireItem("tectonica:basic_raw_sample", 20, 0)
        .lootTable("tectonica:raw_type/basic", 66, 0)

    event.recipes.modular_machinery_reborn.machine_recipe("mmr:resource_extractor", 60)
        .progressX(40)
        .progressY(0)
        .width(122)
        .height(80)
        .requireEnergy(128)
        .requireItem("tectonica:basic_raw_sample", 20, 0)
        .lootTable("tectonica:raw_type/advanced", 66, 0)

    event.recipes.modular_machinery_reborn.machine_recipe("mmr:resource_extractor", 60)
        .progressX(40)
        .progressY(0)
        .width(122)
        .height(80)
        .requireEnergy(512)
        .requireItem("tectonica:basic_raw_sample", 20, 0)
        .lootTable("tectonica:raw_type/elite", 66, 0)
})