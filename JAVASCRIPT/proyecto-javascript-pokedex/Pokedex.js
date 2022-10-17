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
  // bucle for para recorrer todos los pokemon uno a uno y despues lo elimina uno a uno para no tener nada en pantalla
  for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
    const li = document.getElementById(ALL_POKEMONS_INFO[i].name);
    if (li !== undefined && li !== null) {
      li.parentElement.removeChild(li);
    }
  }
  // creo un bucle para crear la carta con la imagen el nombre de cada pokemon
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
    // aqui comparo pokemon por su tipo y le doy estilo  ala lista de cartas

    if (poke.types[0].type.name === "grass") {
      li$$.classList.add("grass");
      div$$.classList.add("grass-color");
    } else if (poke.types[0].type.name === "fire") {
      li$$.classList.add("fire");
      div$$.classList.add("fire-color");
    } else if (poke.types[0].type.name === "water") {
      li$$.classList.add("water");
      div$$.classList.add("water-color");
    } else if (poke.types[0].type.name === "normal") {
      li$$.classList.add("normal");
      div$$.classList.add("normal-color");
    } else if (poke.types[0].type.name === "bug") {
      li$$.classList.add("bug");
      div$$.classList.add("bug-color");
    } else if (poke.types[0].type.name === "poison") {
      li$$.classList.add("poison");
      div$$.classList.add("poison-color");
    } else if (poke.types[0].type.name === "electric") {
      li$$.classList.add("electric");
      div$$.classList.add("electric-color");
    } else if (poke.types[0].type.name === "ground") {
      li$$.classList.add("ground");
      div$$.classList.add("ground-color");
    } else if (poke.types[0].type.name === "fairy") {
      li$$.classList.add("fairy");
      div$$.classList.add("fairy-color");
    } else if (poke.types[0].type.name === "fighting") {
      li$$.classList.add("fighting");
      div$$.classList.add("fighting-color");
    } else if (poke.types[0].type.name === "psychic") {
      li$$.classList.add("psychic");
      div$$.classList.add("psychic-color");
    } else if (poke.types[0].type.name === "rock") {
      li$$.classList.add("rock");
      div$$.classList.add("rock-color");
    } else if (poke.types[0].type.name === "ghost") {
      li$$.classList.add("ghost");
      div$$.classList.add("ghost-color");
    } else if (poke.types[0].type.name === "ice") {
      li$$.classList.add("ice");
      div$$.classList.add("ice-color");
    } else if (poke.types[0].type.name === "dragon") {
      li$$.classList.add("dragon");
      div$$.classList.add("dragon-color");
    }

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

// creo funcion filtrado y me devuelve un array con los pokemon filtrados por nombre o id
function searchPoke(param) {
  const arrayBuscado = ALL_POKEMONS_INFO.filter(
    (x) => x.name.toLowerCase().includes(param) || x.id == param
  );

  renderPokemons(arrayBuscado);
}

window.onload = arrancar;
