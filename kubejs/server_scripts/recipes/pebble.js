ServerEvents.recipes(event => {
    event.shaped("tectonica:pebble_extractor", [
        "  A",
        " B ",
        "B  "
    ], {
        A: "#minecraft:logs",
        B: "minecraft:stick"
    }).id("tectonica:pebble_extractor")

    event.shaped("minecraft:cobblestone", [
        "AA",
        "AA"
    ], {
        A: "tectonica:stone_pebble"
    }).id("tectonica:cobblestone_from_stone_pebbles")
})