LevelEvents.loaded(event => {
    // Difficulty
    event.server.runCommand("difficulty peaceful")
    event.server.setDifficultyLocked(true)

    // Disable fall damage
    event.server.runCommand("gamerule fallDamage false")

    // Time
    event.server.runCommand("gamerule doDaylightCycle false")
    event.server.runCommand("time set noon")

    // Weather
    event.server.runCommand("gamerule doWeatherCycle false")
    event.server.runCommand("weather clear")
})