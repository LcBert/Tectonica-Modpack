// const basic_speed_addon = MMRModifierReplacement.create()
//     .ingredient("tectonica:basic_speed_addon")
//     .addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:duration")
//             .multiply()
//             .modifier(0.9)
//     ).addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:energy")
//             .multiply()
//             .modifier(1.15)
//     )

// const advanced_speed_addon = MMRModifierReplacement.create()
//     .ingredient("tectonica:advanced_speed_addon")
//     .addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:duration")
//             .multiply()
//             .modifier(0.7)
//     ).addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:energy")
//             .multiply()
//             .modifier(1.45)
//     )

// const elite_speed_addon = MMRModifierReplacement.create()
//     .ingredient("tectonica:elite_speed_addon")
//     .addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:duration")
//             .multiply()
//             .modifier(0.5)
//     ).addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:energy")
//             .multiply()
//             .modifier(1.65)
//     )

// const ultimate_speed_addon = MMRModifierReplacement.create()
//     .ingredient("tectonica:ultimate_speed_addon")
//     .addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:duration")
//             .multiply()
//             .modifier(0.3)
//     ).addModifier(
//         MMRRecipeModifier.create()
//             .target("modular_machinery_reborn:energy")
//             .multiply()
//             .modifier(1.85)
//     )

// ItemEvents.modifyTooltips(event => {
//     event.modify("tectonica:basic_speed_addon", event => {
//         event.insert(1, Text.gold("Duration: ").append(Text.green("-10%")))
//         event.insert(2, Text.gold("Energy: ").append(Text.red("+15%")))
//     })

//     event.modify("tectonica:advanced_speed_addon", event => {
//         event.insert(1, Text.gold("Duration: ").append(Text.green("-30%")))
//         event.insert(2, Text.gold("Energy: ").append(Text.red("+45%")))
//     })

//     event.modify("tectonica:elite_speed_addon", event => {
//         event.insert(1, Text.gold("Duration: ").append(Text.green("-50%")))
//         event.insert(2, Text.gold("Energy: ").append(Text.red("+65%")))
//     })

//     event.modify("tectonica:ultimate_speed_addon", event => {
//         event.insert(1, Text.gold("Duration: ").append(Text.green("-70%")))
//         event.insert(2, Text.gold("Energy: ").append(Text.red("+85%")))
//     })
// })