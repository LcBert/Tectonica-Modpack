ServerEvents.recipes(event => {
    event.shaped("tectonica:basic_machine_core", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "alltheores:signalum_plate",
        B: "modular_machinery_reborn:casing_plain",
        C: "modular_machinery_reborn:casing_circuitry"
    })
})