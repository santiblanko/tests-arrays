import { cleanConsole, createAll } from "./data";
import { getUserData } from "./example-4";

const companies = createAll();

cleanConsole(5, companies);



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

var users = getUserData(companies);

function generateData(users) {
  return {
    size: users.length,
    average: users.reduce((acc, user) => acc + user.age, 0) / users.length,
    hasCar: users.filter(user => user.car).length,
    averageWithCar:
      users.filter(user => user.car).reduce((acc, user) => acc + user.age, 0) /
      users.filter(user => user.car).length
  };
}

console.log("---- EXAMPLE 5 --- ", generateData(users));
// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
