const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dieselPrice = 206.84;

for (let n of numbers) {
  let isPrime = n > 0;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(n);
  } else {
    console.log(dieselPrice);
  }
}
