StartupEvents.registry("item", event => {
    event.create("tectonica:pebble_extractor").displayName("Pebble Extractor")
        // .texture("tectonica:item/pebble_extractor")
        .modelGenerator(model => {
            model.parent("minecraft:item/handheld")
            model.texture("layer0", "tectonica:item/pebble_extractor")
        })
        .maxStackSize(1)
        .maxDamage(64)
        .tag("c:tools")

    event.create("tectonica:stone_pebble").displayName("Stone Pebble")
        .texture("tectonica:item/stone_pebble")
        .maxStackSize(64)
})