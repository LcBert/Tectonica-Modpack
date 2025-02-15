const itemsList = [
    "#modular_machinery_reborn:all_casing",
    "#tectonica:machine_core",
    "tectonica:reactor_casing",
    "tectonica:reactor_glass",
    "tectonica:reactor_rod"
]

function block_in_list(block, player) {
    if (itemsList.includes(block.item.id)) {
        return true
    } else {
        for (let tag of itemsList) {
            if (block.hasTag(tag.replace("#", ""))) {
                return true
            }
        }
        return false
    }
}


ItemEvents.rightClicked("tectonica:hammer", event => {
    if (event.level.isClientSide()) return
    if (!event.player.isShiftKeyDown()) return
    let targeted_block = event.target.block
    if (block_in_list(targeted_block, event.player)) {
        try {
            if (!event.player.isCreative()) {
                event.player.give(targeted_block.item.id)
                targeted_block.inventory.allItems.forEach(item => { event.player.give(item) })
            }
        } catch (e) { }
        event.level.destroyBlock(targeted_block.pos, false, event.player)
        event.player.swing()
    }
})

ItemEvents.rightClicked("tectonica:reinforced_hammer", event => {
    if (event.level.isClientSide()) return
    let targeted_block = event.target.block
    if (event.player.isShiftKeyDown()) {
        if (block_in_list(targeted_block, event.player)) {
            try {
                if (!event.player.isCreative()) {
                    event.player.give(targeted_block.item.id)
                    targeted_block.inventory.allItems.forEach(item => { event.player.give(item) })
                }
            } catch (e) { }
            event.level.destroyBlock(targeted_block.pos, false, event.player)
            event.player.swing()
        }
    }
})