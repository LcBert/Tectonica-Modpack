ItemEvents.modification(event => {
    event.modify("minecraft:charcoal", item => {
        item.burnTime = 400
    })

})