// process.argv --> Takes all command-line arguments as array
// for ex - node script.js anirudha ...
// [
//    node.exe,
//    script.js path,
//    anirudha,
//    ...
// ]
// we want arguments after script.js i.e. at 3rd position
// hence, we slice the array.
// And get all the arguments after 2nd position
const args1 = process.argv.slice(2);

// but we want only first argument... to display
const name = args1[0] || `World`;
console.log(`Hello, ${name}!`);

// But if you want you can, manipulate with array dat
// using array methods,
// for ex. getting first 2 arguments as first name and
// last name and print them, with space
const args2 = process.argv;
console.log(`Hello, ${args2.slice(2, 4).join(" ")}`);
