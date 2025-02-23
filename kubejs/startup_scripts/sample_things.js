StartupEvents.registry('item', event => {
    event.create("tectonica:raw_sample")
        .texture("tectonica:item/basic_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:dust_sample")
        .texture("tectonica:item/dust_sample")
        .tag("c:dusts")
        .tag("c:dusts/sample")
})