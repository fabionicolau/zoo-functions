const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((objSpecies) => objSpecies.id === id);
  const findSpecie = data.species.find((objSpecies) =>
    objSpecies.id === findEmployee.responsibleFor[0]);
  const findAnimals = findSpecie.residents.filter((objSpecies) => objSpecies.age);
  const olderAnimal = findAnimals.sort((a, b) => b.age - a.age);
  return Object.values(olderAnimal[0]);
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
