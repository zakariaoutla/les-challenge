let number = [2,4,5,6,4,2,6]

console.log(number);


const grand = Math.max(...number);
const petit = Math.min(...number);

console.log(`Le grand number est : ${grand}`);
console.log(`Le petit number est : ${petit}`);