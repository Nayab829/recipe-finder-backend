import Recipe from "../models/recipe.model.js";

export const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  return res.status(200).json(recipes)
}

export const createRecipe = async (req, res) => {
  const { idMeal, title, image } = req.body;
  if (!title || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existing = await Recipe.findOne({ idMeal });
  if (existing) {
    return res.status(409).json({ message: "Recipe Already Exists." })
  }
  const recipe = await Recipe.create({ idMeal, title, image })

  return res.status(201).json({ message: "recipe added", recipe })
}

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findByIdAndDelete(id);
  return res.status(200).json("Recipe deleted successfully");
}