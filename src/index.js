import express from "express"
import 'dotenv/config'
import recipeRouter from "../routes/recipe.routes.js"
import connectDB from "../config/db.js";
import cors from "cors"
const app = express();


// middelewares
app.use(cors())
app.use(express.json())


connectDB()



app.use("/favourites",recipeRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);

})