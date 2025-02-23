ServerEvents.recipes(event => {
	event.remove({ mod: 'alltheores', output: '#c:rods' })
	event.remove({ mod: 'alltheores', output: '#c:gears' })
	event.remove({ mod: 'alltheores', output: '#c:plates' })
	event.remove({ input: '#alltheores:ore_hammers' })
	event.remove({ output: '#alltheores:ore_hammers' })
})