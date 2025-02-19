ItemEvents.rightClicked("tectonica:pebble_extractor", event => {
    if (event.target.block.id == "minecraft:grass_block" ||
        event.target.block.id == "minecraft:dirt"
    ) {
        let item_entity = event.level.createEntity("minecraft:item")
        event.level.spawnParticles("minecraft:block{block_state:{Name:dirt}}", false, event.target.getHitX(), event.target.getHitY(), event.target.getHitZ(), 0, 0, 0, 5, 1)
        event.player.runCommandSilent("/playsound minecraft:block.rooted_dirt.break ambient @p ~ ~ ~ 0.6 1")
        item_entity.item = Item.of("tectonica:stone_pebble")
        item_entity.setPos(event.target.getHitX(), event.target.getHitY(), event.target.getHitZ())
        item_entity.setMotion(Math.random() * 0.2 - 0.1, Math.random() * 0.2 + 0.1, Math.random() * 0.2 - 0.1)
        item_entity.spawn()
        event.player.swing()

        if (!event.player.isCreative()) {
            event.item.setDamageValue(event.item.getDamageValue() + 1)
            if (event.item.getDamageValue() >= event.item.getMaxDamage()) {
                event.player.setItemInHand(event.hand, Item.of("minecraft:air"))
            }
        }
    }
})