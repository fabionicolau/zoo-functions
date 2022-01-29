const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesNames(whichLocation) {
  return species.filter((elementSpecies) =>
    elementSpecies.location === whichLocation).map((elementNames) => elementNames.name);
}

function getResidentsAnimals(whichLocation) {
  const speciesNames = getSpeciesNames(whichLocation);
  const allAnimals = species.filter((allSpecies) =>
    speciesNames.find((elementSpecies) =>
      elementSpecies === allSpecies.name)).map((element) => element.residents);
  return allAnimals;
}

function getAnimalsByName(whichLocation, option) {
  const specieNames = getSpeciesNames(whichLocation);
  const animalNames = getResidentsAnimals(whichLocation);
  const namesSorted = (option.includeNames === true && option.sorted === true);
  const acc = [];
  specieNames.forEach((specieName, index) => {
    const names = animalNames[index].map((namesArray) => namesArray.name);
    acc.push({ [specieName]: namesSorted ? names.sort() : names });
  });
  return acc;
}

function getAnimalsBySex(whichLocation, option) {
  const specieNames = getSpeciesNames(whichLocation);
  const animalNames = getResidentsAnimals(whichLocation);
  const nameSexSorted = (option.sex && option.sorted);
  const acc = [];
  specieNames.forEach((specieName, index) => {
    const namesBySex = animalNames[index].filter((namesArray) =>
      option.sex === namesArray.sex).map((element) => element.name);
    acc.push({ [specieName]: nameSexSorted ? namesBySex.sort() : namesBySex });
  });
  return acc;
}

const objDefault = {
  NE: getSpeciesNames('NE'),
  NW: getSpeciesNames('NW'),
  SE: getSpeciesNames('SE'),
  SW: getSpeciesNames('SW'),
};

function objWithNames(options) {
  return {
    NE: getAnimalsByName('NE', options),
    NW: getAnimalsByName('NW', options),
    SE: getAnimalsByName('SE', options),
    SW: getAnimalsByName('SW', options),
  };
}

function objBySex(options) {
  return {
    NE: getAnimalsBySex('NE', options),
    NW: getAnimalsBySex('NW', options),
    SE: getAnimalsBySex('SE', options),
    SW: getAnimalsBySex('SW', options),
  };
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return objDefault;
  if (options.includeNames && options.sex) return objBySex(options);
  return objWithNames(options);
}

module.exports = getAnimalMap;
