const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((objSpecies) => objSpecies.name === animal);
  return findAnimal.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
