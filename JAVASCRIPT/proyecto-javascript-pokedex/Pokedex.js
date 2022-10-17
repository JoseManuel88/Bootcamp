/**
 * Requisitos
 * - Obtener lista pokedex y guardar en variable ✅
 * - Obtener el listado de todos los pokemons ✅
 * - Obtener todos los pokemons individuales uno por uno ✅
 * - Para obtener todos los pokemons, me dice el ejercicio que debo iterar uno por uno. ✅
 * - Añadir al DOM los pokemons, dentro del div pokedex.
 */

const pokedex$$ = document.querySelector("#pokedex");
const ALL_POKEMONS_INFO = []; // Cuando una variable se declara en scope global para ser usada por otros, se hace en mayúsculas.
let pokemonFiltrado = [];
const data = false;
function getAllPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((error) =>
      console.log("Error obteniendo todos los pokemons", error)
    );
}

function getOnePokemon(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) =>
      console.log("Error obteniendo pokemon individual", error)
    );
}

function renderPokemons(pokemons) {
  for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
    const li = document.getElementById(ALL_POKEMONS_INFO[i].name);
    if (li !== undefined && li !== null) {
      li.parentElement.removeChild(li);
    }
  }

  pokemons.forEach(function (poke) {
    const li$$ = document.createElement("li");
    li$$.classList.add("card");

    li$$.id = poke.name;

    const img$$ = document.createElement("img");
    img$$.src = poke.sprites.front_default;
    img$$.alt = poke.name;

    const p$$ = document.createElement("p");
    p$$.classList.add("card-title");
    p$$.textContent = poke.name;

    const div$$ = document.createElement("div");
    div$$.classList.add("card-subtitle");
    div$$.textContent = poke.types[0].type.name;

    this.data = true;

    document.getElementById("main").classList.remove("spinner");
    li$$.appendChild(img$$);
    li$$.appendChild(p$$);
    li$$.appendChild(div$$);

    pokedex$$.appendChild(li$$);
    // Creo un  escuchador con la funcion click que girara y tendra una animacion
    li$$.addEventListener("click", function () {
      li$$.classList.remove("animation");
      li$$.classList.add("flip-card");

      let infoPokemon;
      // creo un bucle para que devuelva toda la info de los pokemon
      for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
        if (ALL_POKEMONS_INFO[i].name === li$$.id) {
          infoPokemon = ALL_POKEMONS_INFO[i];
        }
      }

      p$$.textContent = "Habilidad";

      div$$.textContent = "";
      // creo un bucle para que me devuelva la habilidad especial desde infoPokemon creado anteriormente

      for (let i = 0; i < infoPokemon.abilities.length; i++) {
        div$$.textContent += " " + infoPokemon.abilities[i].ability.name;
      }
      // Creo una funcion de de tiempo para la animacion despues del click vuelva a su estado inicial despues de 3segundos
      setTimeout(() => {
        li$$.classList.remove("flip-card");
        li$$.classList.add("animation");
        p$$.textContent = infoPokemon.name;
        div$$.textContent = infoPokemon.types[0].type.name;
      }, 3000);
    });
  });
}

// Director de orquesta: irá llamando a otras funciones.
async function arrancar() {
  console.log("Ejecuntando peticiones pokedex...");

  const allPokemons = await getAllPokemons(); // array de objetos con name y url por cada pokemon
  // console.log('allPokemons:', allPokemons)

  // Itero por el array de pokemons, llamo a getOnePokemon una vez
  // por cada pokemon, pasándole la url de cada pokemon.
  for (const pokemon of allPokemons) {
    // Pido a la api la información de cada pokemon individual y la guardo en una variable
    const pokemonIndividualInfo = await getOnePokemon(pokemon.url);
    ALL_POKEMONS_INFO.push(pokemonIndividualInfo);
  }

  console.log("ALL_POKEMONS_INFO", ALL_POKEMONS_INFO);
  renderPokemons(ALL_POKEMONS_INFO);
}
// Creo una funcion filtrarTipo con un bucle que recorre el array de pokemon con otro bucle que me compara el tipo  y me lo pasa al array pokemonFiltrado
function filtrarTipo(tipo) {
  pokemonFiltrado = [];
  for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
    for (let j = 0; j < ALL_POKEMONS_INFO[i].types.length; j++) {
      if (ALL_POKEMONS_INFO[i].types[j].type.name === tipo) {
        pokemonFiltrado.push(ALL_POKEMONS_INFO[i]);
      }
    }
  }
  renderPokemons(pokemonFiltrado);
}
function llamarPoke() {
  renderPokemons(ALL_POKEMONS_INFO);
}

window.onload = arrancar;
