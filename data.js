const firstName = [
  'joe',
  'jane',
  'seb',
  'alina',
  'fabien',
  'merwan',
  'anna',
  'annah',
  'Fathma',
  'Mohamed',
  'Walid',
  'Josiane',
  undefined,
];
const lastName = [
  'Dupont',
  'Dupond',
  'Durand',
  'Kassir',
  'Dalachra',
  'Hussein',
  'Wartani',
  'Thoumsi',
  'Angello',
  undefined,
];

const companyNames = [
  'apple',
  'microsoft',
  'Louis-vuitton',
  'Nike',
  'Channel',
  'Dior',
  'Slack',
  'Uber'];

function createRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function getValue(array) {
  return array[createRandomNumber(0, array.length + 2)];
}

function createCompany(name, index) {
  const users = createUser(createRandomNumber(10, 50));
  return {
    name,
    users,
    isOpen: !!createRandomNumber(0, 2),
    usersLength: users.length,
    id: index,
  };
}

function createUser(end) {
  const tab = [];

  for (let i = 0; i < end; i++) {
    tab.push({
      firstName: getValue(firstName),
      lastName: getValue(lastName),
      age: createRandomNumber(10, 120),
      car: !!createRandomNumber(0, 2),
      id: tab.length,
    });
  }
  return tab;
}

let companies;

export function createAll() {
  if (!companies) {
    companies = companyNames.map(createCompany);
  }
  return companies;
}

function clone(value) {
  return Object.keys(value).map((key) => {
    value[key].users = value[key].users.map((user) => ({...user}));
    value[key] = {...value[key]};
    return value[key];
  });
}

export function cleanConsole(index, value) {
  const result = clone(value);
  console.log(`---- EXAMPLE ${index} --- values before your modifications  :`,
      result);
}
