ServerEvents.recipes(event => {
    event.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:sample_extractor"]', [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "minecraft:stone",
        B: "#minecraft:planks",
        C: "#tectonica:hammer"
    }).id("tectonica:mmr/sample_extractor").damageIngredient(4, 1)
})

MMREvents.machines(event => {
    event.create("mmr:sample_extractor").name("Sample Extractor")
        .color("#FFbbc1d7")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["cba"],
                        ["bmb"]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:inputbus_tiny"],
                        "b": ["modular_machinery_reborn:casing_plain"],
                        "c": ["modular_machinery_reborn:outputbus_tiny"],
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:sample_extractor", 200)
        .progressX(20)
        .progressY(0)
        .width(130)
        .height(80)
        .requireItem("tectonica:framented_cobblestone", 0, 0)
        .produceItem("tectonica:basic_raw_sample", 46, 0)
})