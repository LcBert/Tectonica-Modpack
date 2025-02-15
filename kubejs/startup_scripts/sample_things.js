StartupEvents.registry('block', event => {
    event.create("tectonica:sample_ore").displayName("Sample Ore")
        .texture("tectonica:block/sample_ore")
        .soundType("stone")
        .hardness(3)
        .resistance(10)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:needs_stone_tool")
        .tagBlock("c:ores")
        .tagBlock("c:ores/sample")
        .tagBlock("c:ore_rates/singular")
        .tagBlock("c:ores_in_ground/stone")
})

StartupEvents.registry('item', event => {
    event.create("tectonica:basic_raw_sample").displayName("Basic Raw Sample")
        .texture("tectonica:item/basic_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:advanced_raw_sample").displayName("Advanced Raw Sample")
        .texture("tectonica:item/advanced_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:elite_raw_sample").displayName("Elite Raw Sample")
        .texture("tectonica:item/elite_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:dust_sample").displayName("Dust Sample")
        .texture("tectonica:item/dust_sample")
        .tag("c:dusts")
        .tag("c:dusts/sample")



    event.create("tectonica:sample_ore_finder").displayName("Sample Ore Finder")
        .tooltip("Right click to find Sample Ores")
        .texture("tectonica:item/sample_ore_finder")
        .maxDamage(64)
        .maxStackSize(1)
})