ServerEvents.recipes(event => {
    event.remove({ mod: "prefab" })
})

RecipeViewerEvents.removeEntries("item", event => {
    let blacklist_items = [
        "prefab:item_house"
    ]

    Item.getList().forEach(item => {
        if (item.mod == "prefab") {
            if (!blacklist_items.includes(item.id)) event.remove(item.id)
        }
    })
})