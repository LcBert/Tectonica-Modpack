ServerEvents.recipes(event => {
    event.remove({ input: "minecraft:charcoal" })
    event.shapeless("4x minecraft:charcoal", "minecraft:coal").id("tectonica:charcoal_from_coal")
    event.shaped("minecraft:coal", [
        "AA",
        "AA"
    ], {
        A: "minecraft:charcoal"
    }).id("tectonica:coal_from_charcoal")

    event.shaped("minecraft:torch", [
        "A",
        "B"
    ], {
        A: "minecraft:charcoal",
        B: "minecraft:stick"
    }).id("tectonica:torch_from_charcoal")

    event.shaped("minecraft:soul_torch", [
        "A",
        "B",
        "C"
    ], {
        A: "minecraft:charcoal",
        B: "minecraft:stick",
        C: "#minecraft:soul_fire_base_blocks"
    }).id("tectonica:soul_torch_from_charcoal")
})