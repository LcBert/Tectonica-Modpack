RecipeViewerEvents.removeEntries("item", event => {
    ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"].forEach(color => {
        event.remove(`waystones:${color}_portstone`)
        event.remove(`waystones:${color}_sharestone`)
    });

    ["mossy", "sandy", "deepslate", "blackstone", "end_stone"].forEach(materials => {
        event.remove(`waystones:${materials}_waystone`)
    });

    event.remove("waystones:dormant_shard")
    event.remove("waystones:warp_plate")
    event.remove("waystones:return_scroll")
    event.remove("waystones:blank_scroll")
    event.remove("waystones:warp_scroll")
})

RecipeViewerEvents.addEntries("item", event => {
    event.add("waystones:attuned_shard")
})