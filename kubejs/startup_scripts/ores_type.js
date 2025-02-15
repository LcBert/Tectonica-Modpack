let dirty_ores = []
let clumps = []
let shards = []
let crystals = []

StartupEvents.registry("item", event => {
    let ores = ["iron", "copper", "gold", "aluminum", "lead", "nickel", "osmium", "platinum", "silver", "tin", "uranium", "zinc", "iridium"]

    ores.forEach(ore => {
        dirty_ores.push(
            event.create("tectonica:dirty_" + ore + "_dust")
                .texture("tectonica:item/dirty_dust/dirty_" + ore + "_dust")
                .tag("c:dirty_dusts")
                .tag("c:dirty_dusts/" + ore)
                .get()
        )

        clumps.push(
            event.create("tectonica:" + ore + "_clump")
                .texture("tectonica:item/clump/" + ore + "_clump")
                .tag("c:clumps")
                .tag("c:clumps/" + ore)
                .get()
        )

        shards.push(
            event.create("tectonica:" + ore + "_shard")
                .texture("tectonica:item/shard/" + ore + "_shard")
                .tag("c:shards")
                .tag("c:shards/" + ore)
                .get()
        )

        crystals.push(
            event.create("tectonica:" + ore + "_crystal")
                .texture("tectonica:item/crystal/" + ore + "_crystal")
                .tag("c:crystals")
                .tag("c:crystals/" + ore)
                .get()
        )
    })
})