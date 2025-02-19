StartupEvents.registry('item', event => {
    event.create("tectonica:basic_raw_sample").displayName("Basic Raw Sample")
        .texture("tectonica:item/basic_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:advanced_raw_sample").displayName("Advanced Raw Sample")
        .texture("tectonica:item/advanced_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:elite_raw_sample").displayName("Elite Raw Sample")
        .texture("tectonica:item/elite_raw_sample")
        .tag("c:raw_materials")
        .tag("c:raw_materials/sample")

    event.create("tectonica:dust_sample").displayName("Dust Sample")
        .texture("tectonica:item/dust_sample")
        .tag("c:dusts")
        .tag("c:dusts/sample")
})