import { format } from "path";
import { cleanConsole, createAll } from "./data";
import { formatCompanies } from "./example-1";

const companies = createAll();

cleanConsole(3, companies);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

const companiesFormatted = formatCompanies(companies);

export function testUppercase(companies) {
  let valid = true;
  companies.every(company => {
    if (company.name !== company.name.toUpperCase()) {
      valid = false;
      return false
    }

    company.users.forEach(user => {
      if (
        user.firstName !== user.firstName.toUpperCase() ||
        user.lastName !== user.lastName.toUpperCase()
      ) {
        valid = false;
        return false
      }
    });
  });
  return valid;
}


console.log("---- EXAMPLE 3 --- ", testUppercase(companies));

// For testing
// console.log(testUppercase([
// {
//     "name": "Slack",
//     "users": [
//         {
//             "firstName": "",
//             "lastName": "DA",
//             "age": 70,
//             "car": false,
//             "id": 5
//         },
//         {
//             "firstName": "",
//             "lastName": "DE",
//             "age": 23,
//             "car": false,
//             "id": 6
//         }
//     ],
//     "isOpen": false,
//     "usersLength": 49,
//     "id": 6
// }

// ]), "---- Return Ex 3 --- ");


// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
