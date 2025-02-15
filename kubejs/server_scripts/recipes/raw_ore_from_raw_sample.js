let tier1ores = []
let tier2ores = []
let tier3ores = []



LootJS.lootTables(event => {
    event.getLootTable("tectonica:ore_type/basic").firstPool().getEntries().forEach(entry => {
        tier1ores.push(entry.item.toString())
    })

    event.getLootTable("tectonica:ore_type/advanced").firstPool().getEntries().forEach(entry => {
        tier2ores.push(entry.item.toString())
    })

    event.getLootTable("tectonica:ore_type/elite").firstPool().getEntries().forEach(entry => {
        tier3ores.push(entry.item.toString())
    })
})

ServerEvents.recipes(event => {
    tier1ores.forEach(ore => { event.shapeless(ore, "3x tectonica:basic_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_basic_raw_sample") })
    tier2ores.forEach(ore => { event.shapeless(ore, "3x tectonica:advanced_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_advanced_raw_sample") })
    tier3ores.forEach(ore => { event.shapeless(ore, "3x tectonica:elite_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_elite_raw_sample") })
})