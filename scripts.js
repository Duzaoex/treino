let tec = ['java', 'javascript', 'python'];
let quantidadeDeLetras = "";

for (let index = 0; index < tec.length; index += 1) {
  if (tec[index].length > quantidadeDeLetras.length) {
    quantidadeDeLetras = tec[index];
  }
}

console.log(quantidadeDeLetras);