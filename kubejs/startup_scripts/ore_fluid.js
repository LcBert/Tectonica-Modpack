
// function create_fluid(event, name, tint) {
//     event.create(name, "thick")
//         .stillTexture(`kubejs:fluid/ore_fluid/fluid_still`)
//         .flowingTexture(`kubejs:fluid/ore_fluid/fluid_flow`)
//         .tint(tint)
// }

// StartupEvents.registry('fluid', event => {
//     let fluids = [
//         { id: "iron_fluid", tint: 0xABA69C },
//         { id: "copper_fluid", tint: 0xD1A493 },
//         { id: "gold_fluid", tint: 0xEFC782 },
//         { id: "aluminum_fluid", tint: 0xB3BCC0 },
//         { id: "lead_fluid", tint: 0xA5A9B6 },
//         { id: "nickel_fluid", tint: 0xB9B7A9 },
//         { id: "osmium_fluid", tint: 0xAAAFB2 },
//         { id: "platinum_fluid", tint: 0x80CBEB },
//         { id: "silver_fluid", tint: 0xB4B4C4 },
//         { id: "tin_fluid", tint: 0xDCE9F6 },
//         { id: "zinc_fluid", tint: 0xC0CAD1 },
//         { id: "iridium_fluid", tint: 0xBFBEBC },
//         { id: "uranium_fluid", tint: 0xBBD3A8 }
//     ]

//     fluids.forEach(fluid => {
//         event.create("tectonica:" + fluid.id, "thick")
//             .stillTexture(`tectonica:fluid/ore_fluid/fluid_still`)
//             .flowingTexture(`tectonica:fluid/ore_fluid/fluid_flow`)
//             .tint(fluid.tint)
//     })
//     // create_fluid(event, 'iron_fluid', 0xABA69C)
//     // create_fluid(event, 'copper_fluid', 0xD1A493)
//     // create_fluid(event, 'gold_fluid', 0xEFC782)
//     // create_fluid(event, 'aluminum_fluid', 0xB3BCC0)
//     // create_fluid(event, 'lead_fluid', 0xA5A9B6)
//     // create_fluid(event, 'nickel_fluid', 0xB9B7A9)
//     // create_fluid(event, 'osmium_fluid', 0xAAAFB2)
//     // create_fluid(event, 'platinum_fluid', 0x80CBEB)
//     // create_fluid(event, 'silver_fluid', 0xB4B4C4)
//     // create_fluid(event, 'tin_fluid', 0xDCE9F6)
//     // create_fluid(event, 'zinc_fluid', 0xC0CAD1)
//     // create_fluid(event, 'iridium_fluid', 0xBFBEBC)
//     // create_fluid(event, 'uranium_fluid', 0xBBD3A8)
// })
