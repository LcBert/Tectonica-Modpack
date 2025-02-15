let dust_ores = [
    { input: "tectonica:dirty_iron_dust", output: "alltheores:iron_dust", },
    { input: "tectonica:dirty_copper_dust", output: "alltheores:copper_dust", },
    { input: "tectonica:dirty_gold_dust", output: "alltheores:gold_dust", },
    { input: "tectonica:dirty_aluminum_dust", output: "alltheores:aluminum_dust", },
    { input: "tectonica:dirty_lead_dust", output: "alltheores:lead_dust", },
    { input: "tectonica:dirty_nickel_dust", output: "alltheores:nickel_dust", },
    { input: "tectonica:dirty_osmium_dust", output: "alltheores:osmium_dust", },
    { input: "tectonica:dirty_platinum_dust", output: "alltheores:platinum_dust", },
    { input: "tectonica:dirty_silver_dust", output: "alltheores:silver_dust", },
    { input: "tectonica:dirty_tin_dust", output: "alltheores:tin_dust", },
    { input: "tectonica:dirty_uranium_dust", output: "alltheores:uranium_dust", },
    { input: "tectonica:dirty_zinc_dust", output: "alltheores:zinc_dust", },
    { input: "tectonica:dirty_iridium_dust", output: "alltheores:iridium_dust", }
]


dust_ores.forEach(ore => {
    ItemEvents.rightClicked(ore.input, event => {
        if (event.getTarget().block.id == "minecraft:water") {
            event.player.setMainHandItem(Item.of(event.item.id, event.item.count - 1))

            event.level.spawnParticles("minecraft:splash", true, event.getTarget().getHitX(), event.getTarget().getHitY(), event.getTarget().getHitZ(), 0, 0, 0, 5, 1)
            event.level.runCommandSilent("/playsound minecraft:block.water.ambient master @a " + event.getTarget().getHitX() + " " + event.getTarget().getHitY() + " " + event.getTarget().getHitZ() + " 1 1")

            let entity = event.level.createEntity("minecraft:item")
            entity.item = Item.of(ore.output)
            entity.setPos(event.getTarget().getHitX(), event.getTarget().getHitY(), event.getTarget().getHitZ())
            entity.setMotionY(0.2)
            entity.setMotionX(Math.random() * 0.2 - 0.1)
            entity.setMotionZ(Math.random() * 0.2 - 0.1)
            entity.spawn()
        }
    })
})