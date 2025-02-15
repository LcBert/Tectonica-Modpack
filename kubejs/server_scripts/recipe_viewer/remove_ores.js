RecipeViewerEvents.removeEntries('item', event => {
    event.remove({ "tag": "c:ores", "not": "tectonica:sample_ore" })
})