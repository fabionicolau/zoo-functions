const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((objSpecies) => ids.find((arrayIds) => objSpecies.id === arrayIds));
}

module.exports = getSpeciesByIds;
