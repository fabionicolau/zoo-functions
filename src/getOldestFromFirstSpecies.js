const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((objSpecies) => objSpecies.id === id);
  const findSpecie = data.species.find((objSpecies) =>
    objSpecies.id === findEmployee.responsibleFor[0]);
  const findAnimals = findSpecie.residents.filter((objSpecies) => objSpecies.age);
  const olderAnimal = findAnimals.sort((a, b) => b.age - a.age);
  return Object.values(olderAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
