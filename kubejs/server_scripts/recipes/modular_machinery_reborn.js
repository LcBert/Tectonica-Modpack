ServerEvents.recipes(event => {
    event.remove({ output: "modular_machinery_reborn:modularium" })
    event.smelting("modular_machinery_reborn:modularium", "tectonica:basic_raw_sample").id("tectonica:smelting/modularium")
    event.blasting("modular_machinery_reborn:modularium", "tectonica:basic_raw_sample").id("tectonica:blasting/modularium")

    event.remove({ id: "modular_machinery_reborn:casing_plain" })
    event.shaped("2x modular_machinery_reborn:casing_plain", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "alltheores:iron_plate",
        B: "minecraft:redstone"
    }).id("tectonica:mmr_casing_plain")
})