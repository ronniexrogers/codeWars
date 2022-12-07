// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = (number) => (number - ~~number >= .5 ? 1 : 0) + ~~number
  
Math.ceil = (number) =>  ~~number === number ? number : ~~number + 1
  
Math.floor = (number) => ~~number