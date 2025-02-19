ServerEvents.recipes(event => {
    event.shaped("modular_machinery_reborn:controller[modular_machinery_reborn:machine=\"mmr:steam_generator\"]", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "alltheores:brass_plate",
        B: "modular_machinery_reborn:casing_plain",
        C: "tectonica:basic_machine_core"
    })
})

MMREvents.machines(event => {
    event.create("mmr:steam_generator").name("Steam Generator")
        .color("#FFfefdc2")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["bgb", "cba"],
                        ["bmb", "ded"],
                        ["fdf", "   "]
                    ]
                )
                .keys(
                    {
                        "a": ["#modular_machinery_reborn:fluidinputhatch"],
                        "b": ["modular_machinery_reborn:casing_plain"],
                        "c": ["#modular_machinery_reborn:inputbus"],
                        "d": ["minecraft:iron_bars"],
                        "e": ["#modular_machinery_reborn:energyoutputhatch"],
                        "f": ["modular_machinery_reborn:casing_vent"],
                        "g": ["modular_machinery_reborn:casing_firebox"],
                    }
                )
        )
})

ServerEvents.recipes(event => {
    event.recipes.modular_machinery_reborn.machine_recipe("mmr:steam_generator", 1200)
        .progressX(20)
        .progressY(0)
        .width(130)
        .height(80)
        .requireFluid("150x minecraft:water", 0, 0)
        .requireItem("minecraft:coal", 0, 20)
        .produceEnergy(64, 44, 0)
})