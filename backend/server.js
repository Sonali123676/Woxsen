// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

// Allow requests from 'http://localhost:3001'
app.use(cors());

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// mongodb
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://sonalisadana1:sonalisadana@cluster0.ea2yqup.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
// Import and use the user routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);
const UserFoodSelection = require("./routes/FoodSelectionRoutes");
app.use("/foodselection", UserFoodSelection);
