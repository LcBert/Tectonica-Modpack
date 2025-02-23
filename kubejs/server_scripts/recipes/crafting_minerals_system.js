let tier1ores = []
let tier2ores = []
let tier3ores = []

LootJS.lootTables(event => {
    event.getLootTable("tectonica:raw_type/basic").firstPool().getEntries().forEach(entry => {
        tier1ores.push(entry.item.toString())
    })

    event.getLootTable("tectonica:raw_type/advanced").firstPool().getEntries().forEach(entry => {
        tier2ores.push(entry.item.toString())
    })

    event.getLootTable("tectonica:raw_type/elite").firstPool().getEntries().forEach(entry => {
        tier3ores.push(entry.item.toString())
    })
})

ServerEvents.recipes(event => {
    tier1ores.forEach(ore => { event.shapeless(ore, "2x tectonica:basic_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_basic_raw_sample") })
    tier2ores.forEach(ore => { event.shapeless(ore, "4x tectonica:basic_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_basic_raw_sample") })
    tier3ores.forEach(ore => { event.shapeless(ore, "8x tectonica:basic_raw_sample").id("tectonica:" + ore.split(":")[1] + "_from_basic_raw_sample") })

    event.shapeless("tectonica:dirty_iron_dust", ["#tectonica:hammer", "minecraft:raw_iron"]).id("tectonica:hammer/crushing/dirty_iron_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_copper_dust", ["#tectonica:hammer", "minecraft:raw_copper"]).id("tectonica:hammer/crushing/dirty_copper_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_gold_dust", ["#tectonica:hammer", "minecraft:raw_gold"]).id("tectonica:hammer/crushing/dirty_gold_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_aluminum_dust", ["#tectonica:hammer", "alltheores:raw_aluminum"]).id("tectonica:hammer/crushing/dirty_aluminum_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_lead_dust", ["#tectonica:hammer", "alltheores:raw_lead"]).id("tectonica:hammer/crushing/dirty_lead_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_nickel_dust", ["#tectonica:hammer", "alltheores:raw_nickel"]).id("tectonica:hammer/crushing/dirty_nickel_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_osmium_dust", ["#tectonica:hammer", "alltheores:raw_osmium"]).id("tectonica:hammer/crushing/dirty_osmium_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_platinum_dust", ["#tectonica:hammer", "alltheores:raw_platinum"]).id("tectonica:hammer/crushing/dirty_platinum_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_silver_dust", ["#tectonica:hammer", "alltheores:raw_silver"]).id("tectonica:hammer/crushing/dirty_silver_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_tin_dust", ["#tectonica:hammer", "alltheores:raw_tin"]).id("tectonica:hammer/crushing/dirty_tin_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_uranium_dust", ["#tectonica:hammer", "alltheores:raw_uranium"]).id("tectonica:hammer/crushing/dirty_uranium_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_zinc_dust", ["#tectonica:hammer", "alltheores:raw_zinc"]).id("tectonica:hammer/crushing/dirty_zinc_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)
    event.shapeless("tectonica:dirty_iridium_dust", ["#tectonica:hammer", "alltheores:raw_iridium"]).id("tectonica:hammer/crushing/dirty_iridium_dust").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)


    event.remove({ "type": "minecraft:smelting", "input": "#c:raw_materials" })
    event.remove({ "type": "minecraft:blasting", "input": "#c:raw_materials" })
    event.remove({ "type": "minecraft:smelting", "input": "#c:storage_blocks" })
    event.remove({ "type": "minecraft:blasting", "input": "#c:storage_blocks" })
    event.remove({ "type": "minecraft:smelting", "input": "#c:ores" })
    event.remove({ "type": "minecraft:blasting", "input": "#c:ores" })
    event.remove({ "type": "minecraft:smelting", "output": "minecraft:charcoal" })
})