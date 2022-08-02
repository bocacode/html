import express from "express"
import cors from "cors"
const app = express()
const port = 4001

app.use(cors())
app.use(express.json())

let students = ["bob","samantha","lily","grace","jim"]

app.get("/movies/:movieTitle/:director",  (req,res)=> {   // for http://localhost:4000/movie/matrix ... If i'm searching in the mongoDB database
  
    const movieTitle = req.params.movieTitle // get the actual movie title (everything to the right of "/movies/"
    const director = req.params.director
    console.log("director:",director)
    console.log(`Looking for movie ${movieTitle}`) // Show me (to prove the obvios) what the user passed to me.
    const query = {title: {'$regex': movieTitle, '$options': 'i'}}; 


    let output = "<html><body> you asked for: " + movieTitle + "<BR>" // starts

    for (let i = 0; i< students.length;i++) {
         output = output + students[i] + "<br>" //middle
    }

    output = output + "</body></html>" //end

    res.send(output)
})

app.listen(port,()=> {
    console.log("localhost:" + port)
})