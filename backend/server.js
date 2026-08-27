const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "VOTE backend работает"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "online",
        service: "VOTE API"
    });
});

app.listen(PORT, () => {
    console.log(`VOTE backend запущен на порту ${PORT}`);
});
