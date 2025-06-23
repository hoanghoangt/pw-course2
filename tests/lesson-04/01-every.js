const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];

// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
const lonhon70 = scores.every(score => score > 70);
console.log("1.1 - Tất cả scores > 70:",lonhon70);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
const lonhon15 = ages.every(age => age > 15);
console.log("1.2 - Tất cả ages > 15:", lonhon15);

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
const dodai = words.every(word => word.length > 3);
console.log("1.3 - Tất cả words dài > 3:", dodai);