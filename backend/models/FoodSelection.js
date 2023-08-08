const mongoose = require("mongoose");

const userFoodSelectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  selectedDay: {
    type: String,
    required: true,
  },
  breakfast: {
    type: String,
    required: true,
  },
  lunch: {
    rice_varieties: {
      type: String,
    },
    Veg_varieties: {
      type: String,
    },
    nonVeg_varieties: {
      type: String,
    },
    sides_varieties: {
      type: String,
    },
    sweet_varieties: {
      type: String,
    },
    drink_varieties: {
      type: String,
    },
  },
  dinner: {
    rice_varieties: {
      type: String,
    },
    Veg_varieties: {
      type: String,
    },
    nonVeg_varieties: {
      type: String,
    },
    sides_varieties: {
      type: String,
    },
    sweet_varieties: {
      type: String,
    },
    drink_varieties: {
      type: String,
    },
    vegetable_varieties: {
      type: String,
    },
    khichdi_varieties: {
      type: String,
    },
    chinese_varieties: {
      type: String,
    },
  },
});

const UserFoodSelection = mongoose.model(
  "UserFoodSelection",
  userFoodSelectionSchema
);

module.exports = UserFoodSelection;
