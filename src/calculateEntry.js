const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((elements) => elements.age < 18);
  const adult = entrants.filter((elements) => elements.age >= 18 && elements.age < 50);
  const senior = entrants.filter((elements) => elements.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const entrantsValue = countEntrants(entrants);
  const childValue = prices.child * entrantsValue.child;
  const adultValue = prices.adult * entrantsValue.adult;
  const seniorValue = prices.senior * entrantsValue.senior;
  return childValue + adultValue + seniorValue;
}

module.exports = { calculateEntry, countEntrants };
