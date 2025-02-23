ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table("tectonica:basic_machine_core", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "alltheores:aluminum_plate",
        B: "modular_machinery_reborn:casing_plain",
        C: "modular_machinery_reborn:casing_circuitry"
    })
})