const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 5.1 Kiểm tra có score > 80 không
const hasHighScore = scores.some(score => score > 80);
console.log("5.1 - Có score > 80:", hasHighScore);

// 5.2 Kiểm tra có age < 18 không
const hasMinor = ages.some(age => age < 18);
console.log("5.2 - Có age < 18:", hasMinor);

// 5.3 Kiểm tra có từ nào dài > 5 không
const hasLongWord = words.some(word => word.length > 5);
console.log("5.3 - Có từ dài > 5:", hasLongWord);