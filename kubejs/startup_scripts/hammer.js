StartupEvents.registry("item", event => {
    event.create("tectonica:hammer", "pickaxe").displayName("Hammer")
        .texture("tectonica:item/hammer")
        .unstackable()
        .modifyTier(tier => { tier.uses = 256 })
        .tag("tectonica:hammer")

    event.create("tectonica:reinforced_hammer", "pickaxe").displayName("Reinforced Hammer")
        .texture("tectonica:item/reinforced_hammer")
        .unstackable()
        .modifyTier(tier => { tier.uses = 2048 })
        .tag("tectonica:hammer")
})