const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 2.1 Lọc scores > 80
const highScores = scores.filter(score => score > 80);
console.log("2.1 - Scores > 80:", highScores);

// 2.2 Lọc ages ≥ 18
const adultAges = ages.filter(age => age >= 18);
console.log("2.2 - Ages ≥ 18:", adultAges);

// 2.3 Lọc từ có độ dài > 5
const longWords = words.filter(word => word.length > 5);
console.log("2.3 - Words dài > 5:", longWords);