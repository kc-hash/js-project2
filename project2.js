// ==============================
// 🔤 String Manipulation Functions
// ==============================

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters in a String
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize the First Letter of Each Word
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ==============================
// 🔢 Array Functions
// ==============================

// 4. Find the Maximum Value in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// 5. Find the Minimum Value in an Array
function findMin(arr) {
  return Math.min(...arr);
}

// 6. Calculate the Sum of All Elements in an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter an Array Based on a Condition Function
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}
// Exemple d'utilisation :
// filterArray([5, 12, 18, 3], num => num > 10); // retourne [12, 18]

// ==============================
// ➗ Mathematical Functions
// ==============================

// 8. Calculate the Factorial of a Number
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 9. Check if a Number is Prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 10. Generate the Fibonacci Sequence up to n Terms
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq;
}

