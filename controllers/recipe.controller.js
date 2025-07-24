import Recipe from "../models/recipe.model.js";

export const getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
    return res.status(200).json(recipes)
}

export const createRecipe =async(req,res)=>{
     const { title, image } = req.body;
    if (!title || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const recipe = await Recipe.create({ title, image })

    return res.status(201).json({ message: "recipe added", recipe})
}