import { Router } from "express";
import { createRecipe, deleteRecipe, getRecipes } from "../controllers/recipe.controller.js";

const router = Router();

router.post("/",createRecipe)
router.get("/",getRecipes)
router.delete("/:id",deleteRecipe)

export default router;