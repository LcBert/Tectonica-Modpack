let blacklist_items = [
    "tectonica:hammer",
    "tectonica:reinforced_hammer",
    "tectonica:sample_ore_finder"
]

ItemEvents.modification(event => {
    Item.getList().forEach(item => {
        if (!blacklist_items.includes(item.id)) {
            event.modify(item.id, itemModify => {
                itemModify.setUnbreakable()
            })
        }

    })
})