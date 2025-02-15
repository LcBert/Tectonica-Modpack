ServerEvents.tags("block", event => {
    // event.get("tectonica:inputbus/tier/1").add("modular_machinery_reborn:inputbus_tiny", "modular_machinery_reborn:inputbus_small", "modular_machinery_reborn:inputbus_normal", "modular_machinery_reborn:inputbus_reinforced", "modular_machinery_reborn:inputbus_big", "modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/2").add("modular_machinery_reborn:inputbus_small", "modular_machinery_reborn:inputbus_normal", "modular_machinery_reborn:inputbus_reinforced", "modular_machinery_reborn:inputbus_big", "modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/3").add("modular_machinery_reborn:inputbus_normal", "modular_machinery_reborn:inputbus_reinforced", "modular_machinery_reborn:inputbus_big", "modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/4").add("modular_machinery_reborn:inputbus_reinforced", "modular_machinery_reborn:inputbus_big", "modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/5").add("modular_machinery_reborn:inputbus_big", "modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/6").add("modular_machinery_reborn:inputbus_huge", "modular_machinery_reborn:inputbus_ludicrous")
    // event.get("tectonica:inputbus/tier/7").add("modular_machinery_reborn:inputbus_ludicrous")

    // event.get("tectonica:outputbus/tier/1").add("modular_machinery_reborn:outputbus_tiny", "modular_machinery_reborn:outputbus_small", "modular_machinery_reborn:outputbus_normal", "modular_machinery_reborn:outputbus_reinforced", "modular_machinery_reborn:outputbus_big", "modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/2").add("modular_machinery_reborn:outputbus_small", "modular_machinery_reborn:outputbus_normal", "modular_machinery_reborn:outputbus_reinforced", "modular_machinery_reborn:outputbus_big", "modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/3").add("modular_machinery_reborn:outputbus_normal", "modular_machinery_reborn:outputbus_reinforced", "modular_machinery_reborn:outputbus_big", "modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/4").add("modular_machinery_reborn:outputbus_reinforced", "modular_machinery_reborn:outputbus_big", "modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/5").add("modular_machinery_reborn:outputbus_big", "modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/6").add("modular_machinery_reborn:outputbus_huge", "modular_machinery_reborn:outputbus_ludicrous")
    // event.get("tectonica:outputbus/tier/7").add("modular_machinery_reborn:outputbus_ludicrous")

    let tiers = ["tiny", "small", "normal", "reinforced", "big", "huge", "ludicrous", "ultimate"]

    for (let i = 1; i <= 8; i++) {
        tiers.forEach(tier => {
            event.get(`tectonica:inputbus/tier/${i}`).add(`modular_machinery_reborn:inputbus_${tier}`)
            event.get(`tectonica:outputbus/tier/${i}`).add(`modular_machinery_reborn:outputbus_${tier}`)
            event.get(`tectonica:energyinputhatch/tier/${i}`).add(`modular_machinery_reborn:energyinputhatch_${tier}`)
            event.get(`tectonica:energyoutputhatch/tier/${i}`).add(`modular_machinery_reborn:energyoutputhatch_${tier}`)
            event.get(`tectonica:fluidinputhatch/tier/${i}`).add(`modular_machinery_reborn:fluidinputhatch_${tier}`)
            event.get(`tectonica:fluidoutputhatch/tier/${i}`).add(`modular_machinery_reborn:fluidoutputhatch_${tier}`)
        })
        tiers.shift()
    }
})