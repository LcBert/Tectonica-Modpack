const basic_speed_addon = MMRModifierReplacement.create()
    .ingredient("tectonica:basic_speed_addon")
    .addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:duration")
            .multiply()
            .modifier(0.9)
    ).addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:energy")
            .multiply()
            .modifier(1.15)
    )

const advanced_speed_addon = MMRModifierReplacement.create()
    .ingredient("tectonica:advanced_speed_addon")
    .addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:duration")
            .multiply()
            .modifier(0.7)
    ).addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:energy")
            .multiply()
            .modifier(1.45)
    )

const elite_speed_addon = MMRModifierReplacement.create()
    .ingredient("tectonica:elite_speed_addon")
    .addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:duration")
            .multiply()
            .modifier(0.5)
    ).addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:energy")
            .multiply()
            .modifier(1.65)
    )

const ultimate_speed_addon = MMRModifierReplacement.create()
    .ingredient("tectonica:ultimate_speed_addon")
    .addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:duration")
            .multiply()
            .modifier(0.3)
    ).addModifier(
        MMRRecipeModifier.create()
            .target("modular_machinery_reborn:energy")
            .multiply()
            .modifier(1.85)
    )