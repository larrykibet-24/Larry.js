function isPrime(num) {
  if (num < 0) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }

  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dieselPrice = 206.84;

numbers.forEach((num) => {
  if (isPrime(num)) {
    console.log(num);
  } else {
    console.log("Diesel price:", dieselPrice);
  }
});
