ItemEvents.rightClicked("minecraft:stick", event => {
    event.getTarget().block.mergeEntityData("{energy:999999999L}")
})