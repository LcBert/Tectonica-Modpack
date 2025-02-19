// StartupEvents.registry("block", event => {
//     let tiers = ["basic", "advanced", "elite", "ultimate"]
//     tiers.forEach(tier => {
//         event.create("tectonica:" + tier + "_speed_addon")
//             .texture("tectonica:block/machine_modifiers/speed_addon/" + tier)
//             .soundType("metal")
//             .hardness(3.0)
//             .resistance(10.0)
//             .requiresTool(true)
//             .tagBlock("minecraft:mineable/pickaxe")

//         event.create("tectonica:" + tier + "_energy_addon")
//             .texture("tectonica:block/machine_modifiers/energy_addon/" + tier)
//             .soundType("metal")
//             .hardness(3.0)
//             .resistance(10.0)
//             .requiresTool(true)
//             .tagBlock("minecraft:mineable/pickaxe")
//     })
// })