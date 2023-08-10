/*imprimir
 ***********
 ***********
 ***********
 ***********
 ***********
 ***********
 ***********
 */

let square = "";

let rows = 6;
let columns = 10;

// for (i = 0; i <= rows; i++) {
//   for (j = 0; j <= columns; j++) {
//     square += `*`;
//   }

//   console.log("\x1b[36m", square);
//   square = ``;
// }

for (i = 0; i <= rows; i++) {
    for (j = 0; j <= columns; j++) {
      square += `*`;
    }
  
    console.log("\x1b[36m", square);
    square = ``;
  }
  
