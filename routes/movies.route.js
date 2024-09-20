import express from 'express'
import { MovieCreate, 
    MovieDelete,
    MovieIndex,
    MovieDetail,  
    MovieUpdate } 
     from '../controllers/movie.controllers.js';
const router = express.Router()

// CRUD functionallity of movies

//r- for reading
router.get('/', MovieIndex);

router.get("/:id",MovieDetail)

//c- for creating movies
router.post("/", MovieCreate);

// U- for updating movies
router.put('/:id',MovieUpdate);

// for deleting movie
router.delete('/:id', MovieDelete);

export default router;