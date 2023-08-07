const express = require("express");
const router = express.Router();
const UserFoodSelection = require("../models/FoodSelection");

// POST route to handle food selections
router.post("/", async (req, res) => {
  const { userId, selectedDay, breakfast, lunch, dinner } = req.body;

  try {
    const foodSelection = new UserFoodSelection({
      userId,
      selectedDay,
      breakfast,
      lunch,
      dinner,
    });

    // Save the food selection to the database
    await foodSelection.save();

    res.status(201).json({ message: "Food selection saved successfully" });
  } catch (error) {
    console.error("Error saving food selection:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
