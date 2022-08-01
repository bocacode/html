import express from "express"
import cors from "cors"
const app = express()
const port = 4001

app.use(cors())
app.use(express.json())

let students = ["bob","samantha","lily","grace","jim"]

app.get("/",(req,res)=> {

    let output = "<html><body><h1>" // starts
    
    output = output + "hello there html" //middle

    output = output + "</h1></body></html>" //end

    res.send(output)
})

app.listen(port,()=> {
    console.log("localhost:4000")
})