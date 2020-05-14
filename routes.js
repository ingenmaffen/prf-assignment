const router = require("express").Router();
const mongoose = require("mongoose");
const recipeModel = mongoose.model("recipe");

// TODO: post
router.route("/new-recipe").get((req, res) => {
  const recipe = recipeModel({
    name: "pancake",
    category: "dessert",
    ingredients: [
      {
        unit: "l",
        quantity: 0.5,
        ingredientName: "milk",
      },
      {
        unit: "pc",
        quantity: 1,
        ingredientName: "egg",
      },
    ],
    steps: [
      "mix ingredients",
      "get a frying pan",
      "fry stuff in pan until it's cake",
    ],
    creationDate: new Date(),
  });
  recipe.save((error) => {
    if (error) {
      return res.status(500).send(error);
    }
    console.log(`${recipe.name} saved!`);
    return res.status(200).send(`${recipe.name} saved!`);
  });
});

router.route("/recipe/:repiceId").get((req, res) => {
  recipeModel.findOne({}).exec((err, recipe) => {
    if (err) {
      throw err;
    }
    console.log(res);
    return res.status(200).send(recipe);
  });
});

module.exports = router;
