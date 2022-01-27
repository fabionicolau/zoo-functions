const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalSchedule(animal) {
  const specie = species.find((element) => element.name === animal);
  return specie.availability;
}

function getAvailabilitySpecies(whichDay) {
  return species.filter((allAnimals) => allAnimals.availability.includes(whichDay))
    .map((specie) => specie.name);
}

function createObj() {
  const schedule = Object.entries(hours);
  const obj = schedule.reduce((acc, valorAtual) => {
    acc[valorAtual[0]] = {
      officeHour: valorAtual[0] === 'Monday' ? 'CLOSED'
        : `Open from ${valorAtual[1].open}am until ${valorAtual[1].close}pm`,
      exhibition: valorAtual[0] === 'Monday' ? 'The zoo will be closed!'
        : getAvailabilitySpecies(valorAtual[0]),
    };
    return acc;
  }, {});
  return obj;
}

function getSchedule(scheduleTarget) {
  const animal = species.find((element) => element.name === scheduleTarget);
  const day = Object.keys(hours).find((elementDay) => scheduleTarget === elementDay);
  if (animal) return getAnimalSchedule(scheduleTarget);
  if (day) return { [day]: createObj()[day] };
  return createObj();
}

module.exports = getSchedule;
