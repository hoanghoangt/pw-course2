const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 3.1 Tìm giá trị đầu tiên scores > 80
const firstHighScore = scores.find(score => score > 80);
console.log("3.1 - First score > 80:", firstHighScore);

// 3.2 Tìm giá trị đầu tiên ages > 20
const firstAdult = ages.find(age => age > 20);
console.log("3.2 - First age > 20:", firstAdult);

// 3.3 Tìm từ đầu tiên có độ dài > 5
const firstLongWord = words.find(word => word.length > 5);
console.log("3.3 - First word dài > 5:", firstLongWord);