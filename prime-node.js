const number = process.argv[2]
let isPrime = true

for (let i = 2; i < number; i++){
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

console.log('number',number,isPrime ? 'is' : 'is not','prime')