// number
// string
// booleans

// non primitives
// Objects
// function

// const enemy1 = {
// 	name: 'Crocodile',
// 	level: 2,
// 	enemy: true,
// 	attacks: function () {
// 		return `the ${name} attacks you!`;
// 	},
// };

// const enemy2 = {
// 	name: 'Snake',
// 	level: 5,
// 	enemy: true,
// 	attacks: function () {
// 		return `the ${name} attacks you!`;
// 	},
// };

function createEnemy(name, level, enemy) {
	this.name = name;
	this.level = level;
	this.enemy = enemy;
	this.attacks = function () {
		return `the ${name} attacks you!`;
	};
}

const enemy4 = createEnemy('Lion', 10, true);
console.log(enemy4);
