PlayerEvents.tick(event => {
    let player_saturation = event.player.getSaturation()
    if (player_saturation > 0) return

    event.player.saturation = 20
})