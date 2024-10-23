function filterEvenNumbers(numbers) { 
    return numbers.filter(num => num % 2 === 0); 
  }
  
  // Pass an array of numbers instead of a single number
  console.log(filterEvenNumbers([15]));  // Output: []
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 