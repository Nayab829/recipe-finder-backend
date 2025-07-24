import { Router } from "express";
import { createRecipe, getRecipes } from "../controllers/recipe.controller.js";

const router = Router();

router.post("/",createRecipe)
router.get("/",getRecipes)

export default router;