const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployees = (nameOrId) => employees.find((objEmployees) =>
  nameOrId.name === objEmployees.firstName || nameOrId.name === objEmployees.lastName
  || nameOrId.id === objEmployees.id);

const getSpecies = (ids) => species.filter((speciesID) =>
  ids.find((arrayIds) => speciesID.id === arrayIds));

const getEmployeesCoverageWithArgs = (nameOrId) => {
  const objEmployees = getEmployees(nameOrId);
  if (!objEmployees) {
    throw new Error('Informações inválidas');
  }
  const specie = getSpecies(objEmployees.responsibleFor);
  return {
    id: objEmployees.id,
    fullName: `${objEmployees.firstName} ${objEmployees.lastName}`,
    species: specie.map((speciesName) => speciesName.name),
    locations: specie.map((speciesLocation) => speciesLocation.location),
  };
};

function getEmployeesCoverage(nameOrId) {
  const allEmployees = employees.filter((objEmployees) => objEmployees);
  if (!nameOrId) {
    return allEmployees.reduce((acc, objEmployees) => {
      const specie = getSpecies(objEmployees.responsibleFor);
      const obj = {
        id: objEmployees.id,
        fullName: `${objEmployees.firstName} ${objEmployees.lastName}`,
        species: specie.map((speciesName) => speciesName.name),
        locations: specie.map((speciesLocation) => speciesLocation.location),
      };
      acc.push(obj);
      return acc;
    }, []);
  }
  const employeesCoverage = getEmployeesCoverageWithArgs(nameOrId);
  return employeesCoverage;
}

module.exports = getEmployeesCoverage;
