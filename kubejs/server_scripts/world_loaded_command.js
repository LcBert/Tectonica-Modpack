LevelEvents.loaded(event => {
    // Difficulty
    event.server.runCommandSilent("difficulty peaceful")
    event.server.setDifficultyLocked(true)

    // Disable fall damage
    event.server.runCommandSilent("gamerule fallDamage false")

    // Time
    event.server.runCommandSilent("gamerule doDaylightCycle false")
    event.server.runCommandSilent("time set noon")

    // Weather
    event.server.runCommandSilent("gamerule doWeatherCycle false")
    event.server.runCommandSilent("weather clear")

    // Disable Announce Advancements
    event.server.runCommandSilent("gamerule announceAdvancements false")
})