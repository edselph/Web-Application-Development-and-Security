const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filray = array.filter(a => a % 2 === 0);

console.log(filray);

const mapray = array.map(a => a % 2 === 0);

console.log(mapray);

const redarray = array.reduce((a) => a * a);

console.log(redarray);

// Filter the array to get all the even numbers, filter function works by looking each element and then filtering it.
// Map the array to get all the squared numbers, map function works by looking each element and then mapping it by true or false.
// Reduce the array to get the sum of all the squared numbers, reduce function works by looking each element and then reducing it.
