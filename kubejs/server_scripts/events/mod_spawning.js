EntityEvents.checkSpawn(event => {
    if (
        event.entity.isMonster() &&
        event.level.getBlock(event.block.pos.x, event.block.pos.y - 1, event.block.pos.z).id != "tectonica:framented_cobblestone"
    ) event.cancel()
})