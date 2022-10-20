function getAllSuperhero4() {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

function getAllSuperhero() {
  return fetch("https://api.agify.io?name=jose")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

function getAllSuperhero2() {
  return fetch("https://api.genderize.io?name=jose")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}

function getAllSuperhero3() {
  return fetch("https://api.nationalize.io?name=jose")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}
async function arrancar() {
  const allSuperhero = await getAllSuperhero();
  await getAllSuperhero2();
  await getAllSuperhero3();
  await getAllSuperhero4();
  console.log(allSuperhero);
}
window.onload = arrancar;