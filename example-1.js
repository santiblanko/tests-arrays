import { createAll, cleanConsole } from "./data";
const companies = createAll();

cleanConsole(1, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatCompanies(companies) {
  let data = companies.map(company => {
    company.name = capitalize(company.name);
    let users = company.users.map(user => {
      user.firstName === undefined
        ? (user.firstName = "")
        : capitalize(user.firstName);
      user.lastName === undefined
        ? (user.lastName = "")
        : capitalize(user.lastName);
      return user;
    });
    users.sort((a, b) => a.firstName.localeCompare(b.firstName));

    return {
      ...company,
      users
    };
  });

  data.sort((a, b) => b.usersLength - a.usersLength);

  return data;
}

console.log("---- EXAMPLE 1 --- ", formatCompanies(companies));

