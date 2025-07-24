import mongoose from "mongoose";

const recipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }
})

const Recipe = mongoose.model("Recipe",recipSchema);

export default Recipe;