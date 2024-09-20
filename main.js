import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express();
const PORT = 8909;

//data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connectDB
connectDB();

app.get('/', (req, res) => {
    res.json({msg: "Hello World!"});
});
//middleware
//CLIENT -> MIDDLEWARE -> SERVER

app.use('/movies', movieRoutes);


app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});