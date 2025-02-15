MMREvents.machines(event => {
    event.create("mmr:crystal_processor").name("Crystal Processor")
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
        { "input": "minecraft:raw_iron", "output": "tectonica:iron_crystal" },
        { "input": "minecraft:raw_copper", "output": "tectonica:copper_crystal" },
        { "input": "minecraft:raw_gold", "output": "tectonica:gold_crystal" },
        { "input": "alltheores:raw_aluminum", "output": "tectonica:aluminum_crystal" },
        { "input": "alltheores:raw_lead", "output": "tectonica:lead_crystal" },
        { "input": "alltheores:raw_nickel", "output": "tectonica:nickel_crystal" },
        { "input": "alltheores:raw_osmium", "output": "tectonica:osmium_crystal" },
        { "input": "alltheores:raw_platinum", "output": "tectonica:platinum_crystal" },
        { "input": "alltheores:raw_silver", "output": "tectonica:silver_crystal" },
        { "input": "alltheores:raw_tin", "output": "tectonica:tin_crystal" },
        { "input": "alltheores:raw_uranium", "output": "tectonica:uranium_crystal" },
        { "input": "alltheores:raw_zinc", "output": "tectonica:zinc_crystal" },
        { "input": "alltheores:raw_iridium", "output": "tectonica:iridium_crystal" },
    ]

    recipe_raw.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:crystal_processor", 60)
            .progressX(40)
            .progressY(0)
            .width(130)
            .height(80)
            .requireEnergy(64)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
    })
})