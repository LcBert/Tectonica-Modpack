let materialsList = []
ServerEvents.tags("item", event => {
    materialsList = event.get("c:ingots").getObjectIds()
})

ServerEvents.recipes(event => {
    event.shaped("tectonica:hammer", [
        " AA",
        " BA",
        "B  "
    ], {
        A: "modular_machinery_reborn:modularium",
        B: "minecraft:stick"
    }).id("tectonica:hammer")

    event.shaped("tectonica:reinforced_hammer", [
        " AA",
        " BA",
        "B  "
    ], {
        A: "modular_machinery_reborn:casing_reinforced",
        B: "alltheores:netherite_rod"
    }).id("tectonica:reinforced_hammer")

    event.shapeless("modular_machinery_reborn:blueprint", ["#tectonica:hammer", "minecraft:paper"]).id("tectonica:mmr_blueprint").damageIngredient(0, 1).damageIngredient(1, 1).damageIngredient(2, 1).damageIngredient(3, 1).damageIngredient(4, 1).damageIngredient(5, 1).damageIngredient(6, 1).damageIngredient(7, 1).damageIngredient(8, 1).damageIngredient(9, 1)

    for (let material of materialsList) {
        let plate_recipe = event.shapeless(material.toString().replace("minecraft", "alltheores").replace("ingot", "plate"), ["#tectonica:hammer", material.toString()]).id("tectonica:hammer/crafting/" + material.toString().split(":")[1].replace("ingot", "plate"))
        let rod_recipe = event.shaped(material.toString().replace("minecraft", "alltheores").replace("ingot", "rod"), [
            "M",
            "M",
            "H"
        ], {
            M: material.toString(),
            H: "#tectonica:hammer"
        }).id("tectonica:hammer/crafting/" + material.toString().split(":")[1].replace("ingot", "rod"))
        let gear_recipe = event.shaped(material.toString().replace("minecraft", "alltheores").replace("ingot", "gear"), [
            " M ",
            "MHM",
            " M "
        ], {
            M: material.toString(),
            H: "#tectonica:hammer"
        }).id("tectonica:hammer/crafting/" + material.toString().split(":")[1].replace("ingot", "gear"))

        for (let i = 0; i < 10; i++) {
            plate_recipe.damageIngredient(i, 1)
            rod_recipe.damageIngredient(i, 1)
            gear_recipe.damageIngredient(i, 1)
        }
    }
})
