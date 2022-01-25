const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((objEmployess) => objEmployess.managers.some((arrayID) => arrayID === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const findManagers = employees.filter((objEmployess) =>
      objEmployess.managers.find((arrayID) => arrayID === managerId));
    return findManagers.map((objEmployess) => `${objEmployess.firstName} ${objEmployess.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
