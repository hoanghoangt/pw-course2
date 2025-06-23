// 1. Khởi động Tàu Vũ trụ K15
const departurePlanet = "Trái Đất";
const mission = "Khám phá Vũ trụ K15";
const crew = ["Toàn", "Nam", "Hà", "Ngọc", "Trang", "Dũng", "Hoàng"]; // Thay bằng tên các thành viên lớp bạn

function launchShip(crewList) {
  const crewNames = crewList.join(", ");
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewNames} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

// Gọi hàm và in ra console
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  return speed * time;
}

const distance = calculateDistance(1000, 24);
console.log(`Khoảng cách đến hành tinh bí ẩn: ${distance} km`);

// 3. Hành tinh kỳ lạ - Chuyển đổi thời gian sang hệ thập lục phân
function convertTimeToHex(time) {
  return time.toString(16);
}

const hexTime = convertTimeToHex(120);
console.log(`Thời gian ở hệ thập lục phân: ${hexTime}`);

// 4. Giải mã mật mã
function decryptCode(code) {
  let decrypted = "";
  for (let char of code) {
    if (char === char.toLowerCase()) {
      decrypted += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      decrypted += char.toLowerCase();
    } else {
      decrypted += char;
    }
  }
  return decrypted;
}

const secret = "K15 Challenge";
console.log(`Mật mã đã giải: ${decryptCode(secret)}`);

// 5. Trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}

returnToEarth();
