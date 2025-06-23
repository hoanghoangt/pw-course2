const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng scores
const totalScore = scores.reduce((sum, curr) => sum + curr, 0);
console.log("6.1 - Tổng scores:", totalScore);

// 6.2 Tính tích numbers
const product = numbers.reduce((acc, val) => acc * val, 1);
console.log("6.2 - Tích numbers:", product);

// 6.3 Tính tổng expenses
const totalExpenses = expenses.reduce((sum, val) => sum + val, 0);
console.log("6.3 - Tổng expenses:", totalExpenses);
