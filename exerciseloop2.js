/*

cuando los numeros sean multiplos de 5 debera escribir la palabra five, en lugar de escribir el numero
cuando los numeros sean multiplos de 3 y 5 debera escribir el texto "3&5"

*/

let concat = "";

for (i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    concat += `3&5, `;
  } else {
    if (i % 5 === 0 && i % 3 !== 0) {
      concat += `five, `;
    } else {
      if (i % 5 !== 0 && i % 3 == 0) {
        concat += `three, `;
      } else {
        concat += `${i}, `;
      }
    }
  }
}

console.log("\x1b[34m",concat);
