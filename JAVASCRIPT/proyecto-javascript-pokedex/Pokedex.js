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
/**
  * <li class="card">
           <img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
           <p class="card-title">Bulbasur</p>
           <div class="card-subtitle">Tipo Fuego</div>
         </li>} pokemons 
  */
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

    li$$.addEventListener("click", function () {
      li$$.classList.remove("animation");
      li$$.classList.add("flip-card");

      let infoPokemon;
      for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
        if (ALL_POKEMONS_INFO[i].name === li$$.id) {
          infoPokemon = ALL_POKEMONS_INFO[i];
        }
      }

      p$$.textContent = "Movimientos";

      div$$.textContent = "";
      for (let i = 0; i < infoPokemon.abilities.length; i++) {
        div$$.textContent += " " + infoPokemon.abilities[i].ability.name;
      }

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

function filtrarTipo(tipo) {
  pokemonFiltrado = [];
  for (let i = 0; i < ALL_POKEMONS_INFO.length; i++) {
    for (let o = 0; o < ALL_POKEMONS_INFO[i].types.length; o++) {
      if (ALL_POKEMONS_INFO[i].types[o].type.name === tipo) {
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
