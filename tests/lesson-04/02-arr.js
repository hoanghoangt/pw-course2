let numbers = [1, 2, 3];
let names = ["Alice", "Bob", "Charlie"];

// 1. push
numbers.push(4);
names.push("David");
console.log("1. Push:", numbers, names);

// 2. pop
numbers = [1, 2, 3, 4];
numbers.pop();
console.log("2. Pop:", numbers);

// 3. unshift
numbers.unshift(0);
names.unshift("David");
console.log("3. Unshift:", numbers, names);

// 4. shift
numbers = [1, 2, 3, 4];
numbers.shift();
console.log("4. Shift:", numbers);
