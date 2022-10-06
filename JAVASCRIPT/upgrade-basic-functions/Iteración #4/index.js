// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let summa = average(numbers)
function average(numbers) {
  var i = 0, summ = 0, ArrayLen = numbers.length;
  while (i < ArrayLen) {
      summ = summ + numbers[i++];
}
  return summ;
}
// var myArray = [1, 5, 2, 3, 7];
// var a = average(myArray);
console.log(summa);