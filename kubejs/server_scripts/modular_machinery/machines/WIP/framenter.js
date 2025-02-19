MMREvents.machines(event => {
    event.create("mmr:framenter").name("Framenter")
        .color("#FF909090")
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
        { input: "minecraft:raw_iron", output: "tectonica:dirty_iron_dust" },
        { input: "minecraft:raw_copper", output: "tectonica:dirty_copper_dust" },
        { input: "minecraft:raw_gold", output: "tectonica:dirty_gold_dust" },
        { input: "alltheores:raw_aluminum", output: "tectonica:dirty_aluminum_dust" },
        { input: "alltheores:raw_lead", output: "tectonica:dirty_lead_dust" },
        { input: "alltheores:raw_nickel", output: "tectonica:dirty_nickel_dust" },
        { input: "alltheores:raw_osmium", output: "tectonica:dirty_osmium_dust" },
        { input: "alltheores:raw_platinum", output: "tectonica:dirty_platinum_dust" },
        { input: "alltheores:raw_silver", output: "tectonica:dirty_silver_dust" },
        { input: "alltheores:raw_tin", output: "tectonica:dirty_tin_dust" },
        { input: "alltheores:raw_uranium", output: "tectonica:dirty_uranium_dust" },
        { input: "alltheores:raw_zinc", output: "tectonica:dirty_zinc_dust" },
        { input: "alltheores:raw_iridium", output: "tectonica:dirty_iridium_dust" },
        { input: "tectonica:basic_raw_sample", output: "2x tectonica:dust_sample" }
    ]

    let recipe_clump = [
        { input: "tectonica:iron_clump", output: "tectonica:dirty_iron_dust" },
        { input: "tectonica:copper_clump", output: "tectonica:dirty_copper_dust" },
        { input: "tectonica:gold_clump", output: "tectonica:dirty_gold_dust" },
        { input: "tectonica:aluminum_clump", output: "tectonica:dirty_aluminum_dust" },
        { input: "tectonica:lead_clump", output: "tectonica:dirty_lead_dust" },
        { input: "tectonica:nickel_clump", output: "tectonica:dirty_nickel_dust" },
        { input: "tectonica:osmium_clump", output: "tectonica:dirty_osmium_dust" },
        { input: "tectonica:platinum_clump", output: "tectonica:dirty_platinum_dust" },
        { input: "tectonica:silver_clump", output: "tectonica:dirty_silver_dust" },
        { input: "tectonica:tin_clump", output: "tectonica:dirty_tin_dust" },
        { input: "tectonica:uranium_clump", output: "tectonica:dirty_uranium_dust" },
        { input: "tectonica:zinc_clump", output: "tectonica:dirty_zinc_dust" },
        { input: "tectonica:iridium_clump", output: "tectonica:dirty_iridium_dust" }
    ]

    recipe_raw.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:framenter", 60)
            .progressX(40)
            .progressY(0)
            .width(122)
            .height(80)
            .requireEnergy(16)
            .requireItem(recipe.input, 20, 0)
            .produceItem(recipe.output, 66, 0)
    });

    recipe_clump.forEach(recipe => {
        event.recipes.modular_machinery_reborn.machine_recipe("mmr:framenter", 60)
            .progressX(40)
            .progressY(0)
            .width(122)
            .height(80)
            .requireEnergy(16)
            .requireItem(recipe.input, 20, 0)
            .produceItem("2x " + recipe.output, 66, 0)
            .produceItem(recipe.output, 0.25, 86, 0)
    })
})