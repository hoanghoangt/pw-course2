const scores = [85, 90, 78];
const numbers = [1, 2, 3];

// 4.1 Tăng 10% nếu < 90, giảm 5% nếu ≥ 90
const adjustedScores = scores.map(score => {
  return score < 90 ? score * 1.1 : score * 0.95;
});
console.log("4.1 - Adjusted scores:", adjustedScores);

// 4.2 Chuyển thành mảng chuỗi
const numberStrings = numbers.map(num => num.toString());
console.log("4.2 - Mảng chuỗi:", numberStrings);

// 4.3 Nhân đôi mỗi giá trị
const doubled = numbers.map(num => num * 2);
console.log("4.3 - Nhân đôi numbers:", doubled);