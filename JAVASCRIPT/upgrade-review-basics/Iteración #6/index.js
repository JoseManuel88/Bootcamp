// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
//  Retorna el array resultante.

// Sugerencia de array:

let jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']



function swap(array, firstIndex, secondIndex){
    const firstElement = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstElement;

    return array;
}

let newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 3)

//  newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 2, 1)
//  newArray = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 2)
console.log(newArray);