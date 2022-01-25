const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = species.reduce((acc, objSpecies) => {
      acc[objSpecies.name] = objSpecies.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }

  const findName = species.find((objSpecies) => objSpecies.name === animal.specie);
  const filterSex = findName.residents.filter((objSpeciesSex) =>
    objSpeciesSex.sex === animal.sex);

  return animal.sex ? filterSex.length : findName.residents.length;
}

module.exports = countAnimals;
