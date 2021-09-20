const speedBoost = 10;
const speedBoots = {
	name: 'speedBoots',
	title: 'speed boots',
	type: 'tool',
	weight: 0,
	icon: '⊾',
	desc: 'so weightless; even touching it makes you feel lighter.',
	func: true,
	func_desc: 'with these boots on, you can run ' + speedBoost + 'x faster than ever before.'
}

const bullet = require('./bullet');
const plugin = bullet.makePlugin('SpeedBoots');

function getPlayerSpeed(player, out) {
	if(player.public.equipped === speedBoots.name) {
		out.set(out.get() * speedBoost);
	}
}

plugin.on('travelers::getMovementSpeed', getPlayerSpeed, 1);
setTimeout(() => {
	bullet.emit('travelers', 'addGameItem', speedBoots.name, speedBoots);
})