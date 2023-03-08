/*En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.*/

const numberConsole = process.argv[2]

function numberIsPrime(number) {
  let isPrime = true

  for (let i = 2; i < number; i++){
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  } 

  return isPrime
}

console.log('number',numberConsole,numberIsPrime(numberConsole) ? 'is' : 'is not','prime')