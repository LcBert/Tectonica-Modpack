StartupEvents.registry('block', event => {
    let tiers = ["basic", "advanced", "elite", "ultimate"]
    tiers.forEach(tier => {
        event.create("tectonica:" + tier + '_machine_core')
            .texture("tectonica:block/" + tier + "_machine_core")
            .soundType('metal')
            .hardness(3.0)
            .resistance(10.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock("tectonica:machine_core")
            .tagBlock("tectonica:machine_core/" + tier)
    });
})