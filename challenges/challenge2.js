const prompt = require("prompt-sync")();
let temperature = prompt(" une température: ")
let f = (temperature * 1.8) +32
console.log("une température: "+ f);