function give_starter_kit(player) {
    let starter_kit = [
        { item: "minecraft:wooden_pickaxe", count: 1, slot: 1 },
        { item: "minecraft:wooden_axe", count: 1, slot: 2 },
        { item: "minecraft:torch", count: 8, slot: 3 },
        { item: "prefab:item_house", count: 1, slot: 8 },
        { item: "ftbquests:book", count: 1, slot: 9 }
    ]

    starter_kit.forEach(item => { player.inventory.add(item.slot - 1, Item.of(item.item, item.count)) })
}

PlayerEvents.loggedIn(event => {
    if (!event.player.getStages().has("first_join")) {
        give_starter_kit(event.player)
        event.player.getStages().add("first_join")
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal("clear_first_join")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument("Players", Arguments.PLAYERS.create(event))
                .executes(ctx => {
                    const arg1 = Arguments.PLAYERS.getResult(ctx, "Players")
                    let player_counts = 0
                    arg1.forEach(player => {
                        player_counts++
                        player.getStages().remove("first_join")
                    })
                    ctx.getSource().player.tell(`Removed first_join stage from ${player_counts} players`)
                    return player_counts
                })
            )
            .executes(ctx => {
                ctx.getSource().player.getStages().remove("first_join")
                ctx.getSource().player.tell("Removed first_join stage")
                return 1
            })
    )

    event.register(
        Commands.literal("starter_kit")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument("Players", Arguments.PLAYERS.create(event))
                .executes(ctx => {
                    const arg1 = Arguments.PLAYERS.getResult(ctx, "Players")
                    let player_counts = 0
                    arg1.forEach(player => {
                        player_counts++
                        give_starter_kit(player)
                    })
                    ctx.getSource().player.tell(`Gave starter kit to ${player_counts} players`)
                    return player_counts
                })
            )
            .executes(ctx => {
                give_starter_kit(ctx.getSource().player)
                ctx.getSource().player.tell("Gave starter kit")
                return 1
            })
    )
})