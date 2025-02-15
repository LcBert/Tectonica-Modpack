StartupEvents.registry('fluid', event => {
    event.create("tectonica:coolant")
        .tickRate(20)
        .levelDecreasePerBlock(2)
        .stillTexture(`tectonica:fluid/fluid_still`)
        .flowingTexture(`tectonica:fluid/fluid_flow`)
        .tint("#36b8ff")
})
