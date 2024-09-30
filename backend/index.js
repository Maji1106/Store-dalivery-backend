const express = require("express"); // แก้ไขการเรียกใช้ express
const cors = require("cors");
require("dotenv").config(); // แก้ไขการเรียก dotenv
const PORT = process.env.PORT || 5000;
const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000"; // กำหนดค่า default

// กำหนดค่า CORS
const corsOption = {
  origin: frontend_url,
};

// รายชื่อของร้านค้า (mock data)
const stores = require("./stores");
console.log(stores);

const app = express(); // แก้ไขลำดับการประกาศตัวแปร app

// ใช้งาน CORS middleware
app.use(cors(corsOption));

// สร้าง API route สำหรับร้านค้า
app.get("/api/stores", (req, res) => {
  res.json(stores); // ส่งข้อมูลร้านค้าใน response
});

// หน้า home (ถ้าต้องการแสดงผลเมื่อเรียก "/")
app.get("/", (req, res) => {
  res.send("Welcome to the Store Delivery Zone Checker API");
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

