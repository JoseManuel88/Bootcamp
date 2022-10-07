// Crea una función que nos devuelva el número de veces que se repite cada
//  una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

// dfsfsejdsañ
function contadorRepetido(array) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array.filter((x) => x === array[i]);
    console.log("Palabra: " + resultado[0] + ", Contador: " + resultado.length);
  }
}

// function contadorRepetidoDistinto(array) {
//   const array2 = [];
//   for (let i = 0; i < array.length; i++) {
//     const resultado = array.filter((x) => x === array[i]);

//     const array2Filtro = array2.filter((x) => x.name === array[i]);
//     if (array2Filtro.length === 0) {
//       console.log(
//         "Palabra: " + resultado[0] + ", Contador: " + resultado.length
//       );
//       array2.push({
//         name: resultado[0],
//         contador: resultado.length
//       });
//     }
//   }
// }

contadorRepetido(counterWords);
// contadorRepetidoDistinto(counterWords);

