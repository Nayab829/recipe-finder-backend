import express from "express"
const app = express();
// middelewares

app.use(express.json())
const favourites = [
    {
        id:1234,
        title:"chicken burger",
        image:"http://example.com/burger.png"
    }
]

app.get("/favourites",(req,res)=>{
    res.status(200).json(favourites)
})
app.post("/favourites",(req,res)=>{
    const {id,title,image} = req.body;
    favourites.push({id,title,image})
    res.status(201).json({message:"recipe added",favourites})
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})