// let inputbus_items = []

// ServerEvents.tags("item", event => {
//     event.get("modular_machinery_reborn:inputbus").getObjectIds().forEach(id => {
//         console.log("asd: " + id)
//     })
// })

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
        A: "alltheores:steel_plate",
        B: "minecraft:redstone"
    }).id("tectonica:mmr_casing_plain")

    event.shaped("modular_machinery_reborn:casing_circuitry", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "pipez:energy_pipe",
        B: "modular_machinery_reborn:casing_plain"
    })

    event.shaped("modular_machinery_reborn:casing_vent", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "minecraft:iron_bars",
        B: "modular_machinery_reborn:casing_plain"
    }).id("tectonica:mmr_casing_vent")

    event.remove({ id: "modular_machinery_reborn:casing_firebox" })
    event.shaped("modular_machinery_reborn:casing_firebox", [
        " A ",
        "ABA",
        " C "
    ], {
        A: "minecraft:iron_bars",
        B: "modular_machinery_reborn:casing_plain",
        C: "minecraft:campfire"
    }).id("tectonica:mmr_casing_firebox")

    event.shaped("modular_machinery_reborn:casing_gearbox", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "alltheores:invar_gear",
        B: "modular_machinery_reborn:casing_plain"
    })


    let tiers = ["tiny", "small"]
    // Item Input Recipes
    tiers.forEach(tier => {
        try {
            event.remove({ output: "modular_machinery_reborn:inputbus_" + tier })
            event.remove({ output: "modular_machinery_reborn:outputbus_" + tier })
            event.remove({ output: "modular_machinery_reborn:fluidinputhatch_" + tier })
            event.remove({ output: "modular_machinery_reborn:fluidoutputhatch_" + tier })
            event.remove({ output: "modular_machinery_reborn:energyinputhatch_" + tier })
            event.remove({ output: "modular_machinery_reborn:energyoutputhatch_" + tier })
            event.remove({ output: "modular_machinery_reborn:experienceinputhatch_" + tier })
            event.remove({ output: "modular_machinery_reborn:experienceoutputhatch_" + tier })
        } catch (e) { }
    })

    inputbus_recipe("inputbus_tiny", "casing_plain", "casing_plain")
    inputbus_recipe("inputbus_small", "casing_plain", "inputbus_tiny")
    inputbus_recipe("inputbus_normal", "casing_plain", "inputbus_small")
    inputbus_recipe("inputbus_reinforced", "casing_reinforced", "inputbus_normal")
    inputbus_recipe("inputbus_big", "casing_reinforced", "inputbus_reinforced")
    inputbus_recipe("inputbus_huge", "casing_reinforced", "inputbus_big")
    inputbus_recipe("inputbus_ludicrous", "casing_reinforced", "inputbus_huge")

    outputbus_recipe("outputbus_tiny", "casing_plain", "casing_plain")
    outputbus_recipe("outputbus_small", "casing_plain", "outputbus_tiny")
    outputbus_recipe("outputbus_normal", "casing_plain", "outputbus_small")
    outputbus_recipe("outputbus_reinforced", "casing_reinforced", "outputbus_normal")
    outputbus_recipe("outputbus_big", "casing_reinforced", "outputbus_reinforced")
    outputbus_recipe("outputbus_huge", "casing_reinforced", "outputbus_big")
    outputbus_recipe("outputbus_ludicrous", "casing_reinforced", "outputbus_huge")

    fluidinputhatch("fluidinputhatch_tiny", "casing_plain", "casing_plain")
    fluidinputhatch("fluidinputhatch_small", "casing_plain", "fluidinputhatch_tiny")
    fluidinputhatch("fluidinputhatch_normal", "casing_plain", "fluidinputhatch_small")
    fluidinputhatch("fluidinputhatch_reinforced", "casing_reinforced", "fluidinputhatch_normal")
    fluidinputhatch("fluidinputhatch_big", "casing_reinforced", "fluidinputhatch_reinforced")
    fluidinputhatch("fluidinputhatch_huge", "casing_reinforced", "fluidinputhatch_big")
    fluidinputhatch("fluidinputhatch_ludicrous", "casing_reinforced", "fluidinputhatch_huge")
    fluidinputhatch("fluidinputhatch_vacuum", "casing_reinforced", "fluidinputhatch_ludicrous")

    fluidoutputhatch("fluidoutputhatch_tiny", "casing_plain", "casing_plain")
    fluidoutputhatch("fluidoutputhatch_small", "casing_plain", "fluidoutputhatch_tiny")
    fluidoutputhatch("fluidoutputhatch_normal", "casing_plain", "fluidoutputhatch_small")
    fluidoutputhatch("fluidoutputhatch_reinforced", "casing_reinforced", "fluidoutputhatch_normal")
    fluidoutputhatch("fluidoutputhatch_big", "casing_reinforced", "fluidoutputhatch_reinforced")
    fluidoutputhatch("fluidoutputhatch_huge", "casing_reinforced", "fluidoutputhatch_big")
    fluidoutputhatch("fluidoutputhatch_ludicrous", "casing_reinforced", "fluidoutputhatch_huge")
    fluidoutputhatch("fluidoutputhatch_vacuum", "casing_reinforced", "fluidoutputhatch_ludicrous")

    energyinputhatch("energyinputhatch_tiny", "casing_plain", "casing_plain")
    energyinputhatch("energyinputhatch_small", "casing_plain", "energyinputhatch_tiny")
    energyinputhatch("energyinputhatch_normal", "casing_plain", "energyinputhatch_small")
    energyinputhatch("energyinputhatch_reinforced", "casing_reinforced", "energyinputhatch_normal")
    energyinputhatch("energyinputhatch_big", "casing_reinforced", "energyinputhatch_reinforced")
    energyinputhatch("energyinputhatch_huge", "casing_reinforced", "energyinputhatch_big")
    energyinputhatch("energyinputhatch_ludicrous", "casing_reinforced", "energyinputhatch_huge")
    energyinputhatch("energyinputhatch_ultimate", "casing_reinforced", "energyinputhatch_ludicrous")

    energyoutputhatch("energyoutputhatch_tiny", "casing_plain", "casing_plain")
    energyoutputhatch("energyoutputhatch_small", "casing_plain", "energyoutputhatch_tiny")
    energyoutputhatch("energyoutputhatch_normal", "casing_plain", "energyoutputhatch_small")
    energyoutputhatch("energyoutputhatch_reinforced", "casing_reinforced", "energyoutputhatch_normal")
    energyoutputhatch("energyoutputhatch_big", "casing_reinforced", "energyoutputhatch_reinforced")
    energyoutputhatch("energyoutputhatch_huge", "casing_reinforced", "energyoutputhatch_big")
    energyoutputhatch("energyoutputhatch_ludicrous", "casing_reinforced", "energyoutputhatch_huge")
    energyoutputhatch("energyoutputhatch_ultimate", "casing_reinforced", "energyoutputhatch_ludicrous")

    function inputbus_recipe(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ACA",
            "DED",
            "ABA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:hopper",
            D: "pipez:item_pipe",
            E: "modular_machinery_reborn:" + middle_item
        }).id("tectonica:mmr/" + output)
    }

    function outputbus_recipe(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ABA",
            "DED",
            "ACA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:hopper",
            D: "pipez:item_pipe",
            E: "modular_machinery_reborn:" + middle_item
        }).id("tectonica:mmr/" + output)
    }

    function fluidinputhatch(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ACA",
            "DED",
            "ABA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:bucket",
            D: "pipez:fluid_pipe",
            E: "modular_machinery_reborn:" + middle_item
        })
    }

    function fluidoutputhatch(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ABA",
            "DED",
            "ACA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:bucket",
            D: "pipez:fluid_pipe",
            E: "modular_machinery_reborn:" + middle_item
        })
    }

    function energyinputhatch(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ACA",
            "DED",
            "ABA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:redstone_block",
            D: "pipez:energy_pipe",
            E: "modular_machinery_reborn:" + middle_item
        })
    }

    function energyoutputhatch(output, casing, middle_item) {
        event.shaped("modular_machinery_reborn:" + output, [
            "ABA",
            "DED",
            "ACA"
        ], {
            A: "modular_machinery_reborn:modularium",
            B: "modular_machinery_reborn:" + casing,
            C: "minecraft:redstone_block",
            D: "pipez:energy_pipe",
            E: "modular_machinery_reborn:" + middle_item
        })
    }
})