import { format } from 'path';
import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);

//facil
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.
function formatUser(user) {
var obj = {};
  obj[`${user.firstName} ${user.lastName} (${user.age})`] = user.car;
  return obj;
}

function formatCompanyUsers(companies) {
   let users = []
   companies.forEach(element => {
    users = element.users.map(formatUser)
  });
  return users
}

console.log('---- EXAMPLE 6 --- ', formatCompanyUsers(companies));


// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below


