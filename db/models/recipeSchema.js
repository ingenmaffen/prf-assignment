const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    category: "breakfast" | "soup" | "mainDish" | "salad" | "dessert",
    ingredients: [
      {
        unit: String,
        quantity: Number,
        ingredientName: String,
      },
    ],
    steps: [String],
    creationDate: Date,
    reviews: [
      {
        score: Number,
        comment: String,
      },
    ],
  },
  { collection: "recipes" }
);

mongoose.model("recipe", recipeSchema);
