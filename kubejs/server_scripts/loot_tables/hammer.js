LootJS.modifiers(event => {
    event.addBlockModifier("minecraft:cobblestone")
        .removeLoot("minecraft:cobblestone")


    event.addBlockModifier("minecraft:cobblestone")
        .addLoot(LootEntry
            .of("tectonica:framented_cobblestone")
            .matchTool(
                ItemFilter.tag("tectonica:hammer")
            )
        )

        .addLoot(LootEntry.of("minecraft:cobblestone")
            .matchTool(ItemFilter.not(ItemFilter.tag("tectonica:hammer")))
        )
})