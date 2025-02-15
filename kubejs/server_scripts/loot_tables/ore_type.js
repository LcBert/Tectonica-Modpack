LootJS.lootTables(event => {
    event.create("tectonica:ore_type/basic", LootType.GENERIC).createPool(pool => {
        pool.addEntry("minecraft:raw_iron")
        pool.addEntry("minecraft:raw_copper")
        pool.addEntry("alltheores:raw_aluminum")
        pool.addEntry("alltheores:raw_lead")
        pool.addEntry("alltheores:raw_silver")
        pool.addEntry("alltheores:raw_tin")
        pool.addEntry("alltheores:raw_zinc")
    })

    event.create("tectonica:ore_type/advanced", LootType.GENERIC).createPool(pool => {
        pool.addEntry("minecraft:raw_gold")
        pool.addEntry("alltheores:raw_nickel")
        pool.addEntry("alltheores:raw_osmium")
        pool.addEntry("alltheores:raw_iridium")
    })

    event.create("tectonica:ore_type/elite", LootType.GENERIC).createPool(pool => {
        pool.addEntry("minecraft:netherite_scrap")
        pool.addEntry("alltheores:raw_platinum")
        pool.addEntry("alltheores:raw_uranium")
    })
})

