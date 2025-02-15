StartupEvents.registry('block', event => {
    event.create("tectonica:framented_cobblestone").displayName("Framented Cobblestone")
        .texture("tectonica:block/framented_cobblestone")
        .soundType("stone")
        .hardness(2)
        .resistance(4)
        .requiresTool(true)
        .tagBlock("minecraft:mineable/pickaxe")
})