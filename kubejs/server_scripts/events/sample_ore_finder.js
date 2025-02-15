let is_running = false;

ItemEvents.rightClicked("tectonica:sample_ore_finder", event => {
    if (is_running) return;
    is_running = true;

    let playerPos = event.player.getPosition(1);
    let nearest_block = null;

    for (let x = -15; x <= 15; x++) {
        for (let y = -15; y <= 15; y++) {
            for (let z = -15; z <= 15; z++) {
                let block = event.level.getBlock(playerPos.x + x, playerPos.y + y, playerPos.z + z);
                if (block.id == "tectonica:sample_ore") {
                    if ((nearest_block == null) || (event.player.getDistance(block.getPos()) < event.player.getDistance(nearest_block.getPos()))) {
                        nearest_block = block;
                    }
                }
            }
        }
    }

    if (nearest_block != null) {
        event.player.tell("Nearest §6Sample Ore §rfound within " + Math.round(event.player.getDistance(nearest_block.getPos())) + " blocks in Y level " + nearest_block.getPos().y);
        // event.player.playSound('minecraft:entity.experience_orb.pickup', 1, 0.5)
        event.player.runCommandSilent("/playsound minecraft:entity.experience_orb.pickup master @p ~ ~ ~ 1 1")
    } else {
        event.player.tell("No §6Sample Ores §rfound");
        event.player.runCommandSilent("/playsound minecraft:entity.experience_orb.pickup master @p ~ ~ ~ 1 0")
    }

    event.player.swing();
    if (!event.player.isCreative()) {
        event.item.setDamageValue(event.item.getDamageValue() + 1);
        if (event.item.getDamageValue() >= 64) {
            event.player.setItemInHand(event.hand, "minecraft:air");
        }
    }

    event.server.scheduleInTicks(20, () => {
        is_running = false;
    });
});
