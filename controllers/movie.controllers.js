import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
};

export const MovieCreate =  async (req, res) => {
   

// Validate your data.
    const newMovie = new Movie({
        title: req.body.title,
        desc : req.body.desc,
     });
// Successfull

try{
    const movie = await newMovie.save();
    return res.status(201).json(movie)
} catch (error) {
    return res.status(400).json({ mesaage: error.message});

}

   


 
// id , title, desc
//console.log(req.body);
// create the movie info
//res.send('Create a movie')

};
export const MovieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
         return res.status(404).json({ message: "Cannot find movie" });
     
        }
        else{
         res.json(movie)
        }
 
     } catch (error) {
         return res.status(500).json({ message: error.message });
         
     }
}

export const MovieUpdate =  async(req, res) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate( {_id: req.params.id},{
            title: req.body.title,
            desc: req.body.desc
        },
    {
        new: true,
    });
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
    //validate the user input
    // if(req.body.title != null){
    //     res.movie.title = req.body.title;
    // }
    // if(req.body.desc != null){
    //     res.movie.desc = req.body.desc;
    // }
    // try {
    //     const updatedMovie =  await  res.movie.save();
    //     res.json(updatedMovie);

    // } catch (error) {
    //     res.status(400).json({ message: error.message});
        
    // }
   
};

export const MovieDelete = async (req, res) => {
    const movieId = req.params.id;
    
   try {
    await Movie.deleteOne({ _id: movieId })
    res.json({ message: "Movie deleted successfully" });
   } catch (error) {
    res.status(500).json({ message: error.message});
    
   }
    
};




