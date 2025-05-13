function pertenceFibonacci(numero) {
  let a = 0, b = 1;

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  if (numero === b || numero === 0) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
  }
}


pertenceFibonacci(21); 
pertenceFibonacci(22); 
