MMREvents.machines(event => {
    event.create("mmr:clump_processor").name("Clump Processor")
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
    let recipe_raw = [
        { "input": "minecraft:raw_iron", "output": "tectonica:iron_clump" },
        { "input": "minecraft:raw_copper", "output": "tectonica:copper_clump" },
        { "input": "minecraft:raw_gold", "output": "tectonica:gold_clump" },
        { "input": "alltheores:raw_aluminum", "output": "tectonica:aluminum_clump" },
        { "input": "alltheores:raw_lead", "output": "tectonica:lead_clump" },
        { "input": "alltheores:raw_nickel", "output": "tectonica:nickel_clump" },
        { "input": "alltheores:raw_osmium", "output": "tectonica:osmium_clump" },
        { "input": "alltheores:raw_platinum", "output": "tectonica:platinum_clump" },
        { "input": "alltheores:raw_silver", "output": "tectonica:silver_clump" },
        { "input": "alltheores:raw_tin", "output": "tectonica:tin_clump" },
        { "input": "alltheores:raw_uranium", "output": "tectonica:uranium_clump" },
        { "input": "alltheores:raw_zinc", "output": "tectonica:zinc_clump" },
        { "input": "alltheores:raw_iridium", "output": "tectonica:iridium_clump" },
    ]

    let recipe_shard = [
        { "input": "tectonica:iron_shard", "output": "tectonica:iron_clump" },
        { "input": "tectonica:copper_shard", "output": "tectonica:copper_clump" },
        { "input": "tectonica:gold_shard", "output": "tectonica:gold_clump" },
        { "input": "tectonica:aluminum_shard", "output": "tectonica:aluminum_clump" },
        { "input": "tectonica:lead_shard", "output": "tectonica:lead_clump" },
        { "input": "tectonica:nickel_shard", "output": "tectonica:nickel_clump" },
        { "input": "tectonica:osmium_shard", "output": "tectonica:osmium_clump" },
        { "input": "tectonica:platinum_shard", "output": "tectonica:platinum_clump" },
        { "input": "tectonica:silver_shard", "output": "tectonica:silver_clump" },
        { "input": "tectonica:tin_shard", "output": "tectonica:tin_clump" },
        { "input": "tectonica:uranium_shard", "output": "tectonica:uranium_clump" },
        { "input": "tectonica:zinc_shard", "output": "tectonica:zinc_clump" },
        { "input": "tectonica:iridium_shard", "output": "tectonica:iridium_clump" },
    ]

    recipe_raw.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:clump_processor", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
    })

    recipe_shard.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:clump_processor", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
    })
})