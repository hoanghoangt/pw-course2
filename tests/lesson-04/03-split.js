const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Split name theo khoảng trắng
const nameArray = name.split(" ");
console.log("1. Name split:", nameArray);

// 2. Split emails theo dấu phẩy
const emailArray = emails.split(",");
console.log("2. Emails split:", emailArray);

// 3. Split date theo dấu gạch ngang
const dateArray = date.split("-");
console.log("3. Date split:", dateArray);

