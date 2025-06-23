const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng dấu chấm
const phoneFixed = phoneNumber.replace(/ /g, ".");
console.log("1. Phone:", phoneFixed);

// 2. Thay "lỗi" thành "bug"
const reportFixed = report.replace("lỗi", "bug");
console.log("2. Report:", reportFixed);

// 3. Thay "," thành "."
const numberDot = numbersStr.replace(/,/g, ".");
console.log("3. Number string:", numberDot);
