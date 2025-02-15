LootJS.modifiers(event => {
    event.addTableModifier("minecraft:chests").removeLoot(Ingredient.all)
})