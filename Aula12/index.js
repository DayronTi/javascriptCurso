//Concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); //a1.concatena com a2
console.log(a3);

const a4 = a1.concat(a2, [7, 8, 9], 'Luiz'); //a1 concatena com a2 + array literal + uma string
console.log(a4)

//  método do rest -> ...spread -> espalhado
const a5 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3)