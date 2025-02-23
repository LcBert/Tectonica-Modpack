ServerEvents.recipes(event => {
    // event.remove({ mod: 'fluxnetworks', input: "minecraft:ender_eye" })
    event.remove("fluxnetworks:flux_configurator")
    event.remove("fluxnetworks:flux_core")
    event.remove("fluxnetworks:flux_controller")

    event.shaped("fluxnetworks:flux_configurator", [
        " AC",
        " BA",
        "B  "
    ], {
        A: "fluxnetworks:flux_core",
        B: "fluxnetworks:flux_block",
        C: "alltheores:enderium_gear"
    })

    event.shaped("4x fluxnetworks:flux_core", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "fluxnetworks:flux_dust",
        B: "minecraft:obsidian",
        C: "alltheores:enderium_gear"
    })

    event.shaped("fluxnetworks:flux_controller", [
        "AEA",
        "BCD",
        "AAA"
    ], {
        A: "fluxnetworks:flux_block",
        B: "fluxnetworks:flux_plug",
        C: "fluxnetworks:flux_core",
        D: "fluxnetworks:flux_point",
        E: "alltheores:steel_gear"
    })
})