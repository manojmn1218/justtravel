const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("JustTravel backend is running");
});

app.get("/api/packages", (req, res) => {
  res.json([
    { id: 1, place: "Maldives", price: 89999 },
    { id: 2, place: "Goa", price: 14499 },
    { id: 3, place: "Himachal", price: 32999 }
  ]);
});

app.post("/api/book", (req, res) => {
  res.json({
    status: "success",
    message: "Booking request received"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
