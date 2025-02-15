ItemEvents.modifyTooltips(event => {
    event.modify("tectonica:basic_speed_addon", event => {
        event.insert(1, Text.gold("Duration: ").append(Text.green("-10%")))
        event.insert(2, Text.gold("Energy: ").append(Text.red("+15%")))
    })

    event.modify("tectonica:advanced_speed_addon", event => {
        event.insert(1, Text.gold("Duration: ").append(Text.green("-30%")))
        event.insert(2, Text.gold("Energy: ").append(Text.red("+45%")))
    })

    event.modify("tectonica:elite_speed_addon", event => {
        event.insert(1, Text.gold("Duration: ").append(Text.green("-50%")))
        event.insert(2, Text.gold("Energy: ").append(Text.red("+65%")))
    })

    event.modify("tectonica:ultimate_speed_addon", event => {
        event.insert(1, Text.gold("Duration: ").append(Text.green("-70%")))
        event.insert(2, Text.gold("Energy: ").append(Text.red("+85%")))
    })
})