LootJS.modifiers(event => {
    event.addBlockModifier("#c:ores")
        .removeLoot(Ingredient.all)
})