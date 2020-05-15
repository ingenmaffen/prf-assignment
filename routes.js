const router = require("express").Router();
const mongoose = require("mongoose");
const recipeModel = mongoose.model("recipe");

router.route("/new-recipe").post((req, res) => {
  const recipe = recipeModel({
    name: req.body.name,
    category: req.body.category,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
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

router.route("/recipe/list").get((req, res) => {
  recipeModel.find({}).exec((err, recipes) => {
    if (err) {
      throw err;
    }
    return res.status(200).send(
      recipes.map((recipe) => {
        return {
          id: recipe._id,
          name: recipe.name,
          image: recipe.image,
        };
      })
    );
  });
});

router.route("/recipe/:recipeId").get((req, res) => {
  recipeModel.findById(req.params.recipeId).exec((err, recipe) => {
    if (err) {
      throw err;
    }
    return res.status(200).send(recipe);
  });
});

router.route("/enums/recipe-categories").get((req, res) => {
  return res.status(200).send([
    {
      value: "breakfast",
      name: "Reggeli",
    },
    {
      value: "soup",
      name: "Leves",
    },
    {
      value: "mainDish",
      name: "Főétel",
    },
    {
      value: "salad",
      name: "Saláta",
    },
    {
      value: "dessert",
      name: "Desszert",
    },
  ]);
});

module.exports = router;
