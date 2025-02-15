MMREvents.machines(event => {
    event.create("mmr:shard_processor").name("Shard Processor")
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
        { "input": "minecraft:raw_iron", "output": "tectonica:iron_shard" },
        { "input": "minecraft:raw_copper", "output": "tectonica:copper_shard" },
        { "input": "minecraft:raw_gold", "output": "tectonica:gold_shard" },
        { "input": "alltheores:raw_aluminum", "output": "tectonica:aluminum_shard" },
        { "input": "alltheores:raw_lead", "output": "tectonica:lead_shard" },
        { "input": "alltheores:raw_nickel", "output": "tectonica:nickel_shard" },
        { "input": "alltheores:raw_osmium", "output": "tectonica:osmium_shard" },
        { "input": "alltheores:raw_platinum", "output": "tectonica:platinum_shard" },
        { "input": "alltheores:raw_silver", "output": "tectonica:silver_shard" },
        { "input": "alltheores:raw_tin", "output": "tectonica:tin_shard" },
        { "input": "alltheores:raw_uranium", "output": "tectonica:uranium_shard" },
        { "input": "alltheores:raw_zinc", "output": "tectonica:zinc_shard" },
        { "input": "alltheores:raw_iridium", "output": "tectonica:iridium_shard" },
    ]

    let recipe_crystal = [
        { "input": "tectonica:iron_crystal", "output": "tectonica:iron_shard" },
        { "input": "tectonica:copper_crystal", "output": "tectonica:copper_shard" },
        { "input": "tectonica:gold_crystal", "output": "tectonica:gold_shard" },
        { "input": "tectonica:aluminum_crystal", "output": "tectonica:aluminum_shard" },
        { "input": "tectonica:lead_crystal", "output": "tectonica:lead_shard" },
        { "input": "tectonica:nickel_crystal", "output": "tectonica:nickel_shard" },
        { "input": "tectonica:osmium_crystal", "output": "tectonica:osmium_shard" },
        { "input": "tectonica:platinum_crystal", "output": "tectonica:platinum_shard" },
        { "input": "tectonica:silver_crystal", "output": "tectonica:silver_shard" },
        { "input": "tectonica:tin_crystal", "output": "tectonica:tin_shard" },
        { "input": "tectonica:uranium_crystal", "output": "tectonica:uranium_shard" },
        { "input": "tectonica:zinc_crystal", "output": "tectonica:zinc_shard" },
        { "input": "tectonica:iridium_crystal", "output": "tectonica:iridium_shard" },
    ]

    recipe_raw.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:shard_processor", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
    })

    recipe_crystal.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:shard_processor", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
    })
})