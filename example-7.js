import { cleanConsole, createAll } from "./data";

const companies = createAll();

cleanConsole(7, companies);

// console.log("---- EXAMPLE 7 part 5 --- ", companies);
// console.log("---- EXAMPLE 7 part 6 --- ", companies);
// console.log("---- EXAMPLE 7 part 7 --- ", companies);
// console.log("---- EXAMPLE 7 part 8 --- ", companies);
//
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

function findById(id) {
  return companies.find(company => company.id === id).name;
}

console.log("---- EXAMPLE 7 part 1 --- ", findById(1));

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.
function removeFromList(id) {
  companies.splice(companies.findIndex(company => company.id === id), 1);
}

removeFromList(1);
console.log("---- EXAMPLE 7 part 2 --- ", companies, 1);

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".
function patchCompany(id) {
  const company = companies.find(company => company.id === id);

  const companyCloned = { ...company };
  delete companyCloned.users;

  var url = "https://reqbin.com/echo/patch/json";

  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve({
            status: xhr.status,
            response: xhr.responseText
          });
        } else {
          reject({
            status: xhr.status,
            response: xhr.responseText
          });
        }
      }
    };
    var data = JSON.stringify(companyCloned);
    xhr.send(data);
  });
}

patchCompany(0)
  .then(response => {
    console.log("---- EXAMPLE 7 part 3 --- ", response);
  })
  .catch(err => {
    console.log("---- EXAMPLE 7 part 3 Err --- ", err);
  });

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

function addToCompany(companyId, user) {
  const company = companies.find(company => company.id === companyId);
  if (company) {
    company.users.push(user);
    company.usersLength = company.users.length;
  }
}

addToCompany(0, {
  firstName: "Juan",
  lastName: "Delgado",
  age: 30,
  car: true,
  id: crypto.randomUUID()
});
console.log("---- EXAMPLE 7 part 4 --- ", companies);

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

function updateCompany(id) {
  const company = companies.find(company => company.id === id);
  const companyCloned = { ...company };
  delete companyCloned.users;
  var url = "https://reqbin.com/echo/put/json?updateCompany=true&id=" + id;

  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve({
            status: xhr.status,
            response: xhr.responseText
          });
        } else {
          reject({
            status: xhr.status,
            response: xhr.responseText
          });
        }
      }
    };
    var data = JSON.stringify(companyCloned);
    xhr.send(data);
  });
}

updateCompany(0)
  .then(response => {
    console.log("---- EXAMPLE 7 part 5 --- ", response);
  })
  .catch(err => {
    console.log("---- EXAMPLE 7 part 5 Err --- ", err);
  });

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".
function removeFromCompany(companyId, userId) {
  const company = companies.find(company => company.id === companyId);
  if (company) {
    company.users = company.users.filter(user => user.id !== userId);
    company.usersLength = company.users.length;
  }
}
removeFromCompany(0, 0);
console.log("---- EXAMPLE 7 part 6 --- ", companies);

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".
function updateUser(companyId, userId) {
  const company = companies.find(company => company.id === companyId);
  const user = company.users.find(user => user.id === userId);
  if (user) {
    const userCloned = { ...user };
    delete userCloned.id;
    delete userCloned.firstName;
    delete userCloned.lastName;
    var url =
      "https://reqbin.com/echo/patch/json?patch&companyId=" +
      companyId +
      "&userId=" +
      userId;

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("PATCH", url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve({
              status: xhr.status,
              response: xhr.responseText
            });
          } else {
            reject({
              status: xhr.status,
              response: xhr.responseText
            });
          }
        }
      };
      var data = JSON.stringify(userCloned);
      xhr.send(data);
    });
  }
}

updateUser(0, 1)
  .then(response => {
    console.log("---- EXAMPLE 7 part 7 --- ", response);
  })
  .catch(err => {
    console.log("---- EXAMPLE 7 part 7 Err --- ", err);
  });

console.log("---- EXAMPLE 7 part 7 --- ", companies);

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
function updateAllUserFields(companyId, userId) {
  const company = companies.find(company => company.id === companyId);
  const user = company.users.find(user => user.id === userId);
  if (user) {
    var url =
      "https://reqbin.com/echo/put/json?put&companyId=" +
      companyId +
      "&userId=" +
      userId;

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("PUT", url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve({
              status: xhr.status,
              response: xhr.responseText
            });
          } else {
            reject({
              status: xhr.status,
              response: xhr.responseText
            });
          }
        }
      };
      var data = JSON.stringify(user);
      xhr.send(data);
    });
  }
}

updateAllUserFields(0, 1)
  .then(response => {
    console.log("---- EXAMPLE 7 part 8 --- ", response);
  })
  .catch(err => {
    console.log("---- EXAMPLE 7 part 8 Err --- ", err);
  });

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.
function transferUser(companyIdFrom, companyIdTo, userId) {
  const companyFrom = companies.find(company => company.id === companyIdFrom);
  const companyTo = companies.find(company => company.id === companyIdTo);

  if (companyFrom && companyTo) {
    const user = companyFrom.users.find(user => user.id === userId);
    if (user) {
      companyFrom.users = companyFrom.users.filter(user => user.id !== userId);
      companyFrom.usersLength = companyFrom.users.length;
      companyTo.users.push(user);
      companyTo.usersLength = companyTo.users.length;

    }
  }
}

transferUser(7,6,2)
console.log("---- EXAMPLE 7 part 9 --- ", companies);
// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
