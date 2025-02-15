LootJS.modifiers(event => {
    event.addBlockModifier("minecraft:short_grass")
        .removeLoot("minecraft:wheat_seeds")

    event.addBlockModifier("minecraft:tall_grass")
        .removeLoot("minecraft:wheat_seeds")

})