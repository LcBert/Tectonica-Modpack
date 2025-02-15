MMREvents.machines(event => {
    event.create("mmr:washer").name("Washer")
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
        .sound("running", {
            "ambient": "minecraft:block.pointed_dripstone.drip_water"
        })
})

ServerEvents.recipes(event => {
    let recipe = [
        { "input": "tectonica:dirty_iron_dust", "output": "alltheores:iron_dust" },
        { "input": "tectonica:dirty_copper_dust", "output": "alltheores:copper_dust" },
        { "input": "tectonica:dirty_gold_dust", "output": "alltheores:gold_dust" },
        { "input": "tectonica:dirty_aluminum_dust", "output": "alltheores:aluminum_dust" },
        { "input": "tectonica:dirty_lead_dust", "output": "alltheores:lead_dust" },
        { "input": "tectonica:dirty_nickel_dust", "output": "alltheores:nickel_dust" },
        { "input": "tectonica:dirty_osmium_dust", "output": "alltheores:osmium_dust" },
        { "input": "tectonica:dirty_platinum_dust", "output": "alltheores:platinum_dust" },
        { "input": "tectonica:dirty_silver_dust", "output": "alltheores:silver_dust" },
        { "input": "tectonica:dirty_tin_dust", "output": "alltheores:tin_dust" },
        { "input": "tectonica:dirty_uranium_dust", "output": "alltheores:uranium_dust" },
        { "input": "tectonica:dirty_zinc_dust", "output": "alltheores:zinc_dust" },
        { "input": "tectonica:dirty_iridium_dust", "output": "alltheores:iridium_dust" },
    ]

    recipe.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:washer", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .requireFluid("100x minecraft:water", 20, 20)
            .produceItem(recipe.output, 66, 0)
    })
})