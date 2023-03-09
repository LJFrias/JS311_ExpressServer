console.log("loading page")

const express = require("express")

const app = express()
const PORT = 8080

// make sure all the data passing back and forth is in JSON format
// using a middleware component
app.use(express.json())

let db = [] // this is just for testing. We don't really do this. Not persistent.

app.get("/todos", (req, res) => {
    console.log("GET /todos")

    res.json(db)

    //you could get completed and not completed todos with this route
    //using a query param, if/else
})

app.get("/todos/:id", (req, res) => {
    console.log("GET /todos/:id")

    let value = req.params.id
    let matchingID = db.find((item) => {return item.id == value})
    
    if(matchingID){
    res.json(matchingID)
    }
    else {
        res.send("Todo not found!")
    }

})

app.delete("/todos/:id", (req, res) => {
    console.log("DELETE /todos/:id")

    let value = req.params.id
    let matchingID = db.find((item) => {return item.id == value})
   

    if(matchingID){
        let arrayIndex = db.findIndex((item) => {return item.id == value})
        let deletedItem = db.splice(arrayIndex, 1)
        res.json(deletedItem)
    }
    else {
        res.send("Todo does not exist")
    }
})

app.post("/todos", (req, res) => {
    console.log("GET /todos/")

    let newItem = {}
    newItem.id = getRandomInt()
    newItem.description = req.body.description
    newItem.completed = false

    //put it in the database
    db.push(newItem)

    //return the newItem on the response
    res.json(newItem)
    
})

app.put("/todos/:id", (req, res) => {
    console.log("PUT /todos/:id")

    let value = req.params.id
    //find the item that matches the id
    let matchingID = db.find((item) => {return item.id == value})

    //to update the description, get the req.body.description
    //to update the completed, get the req.body.completed
    let description = req.body.description
    let completed = req.body.completed
  
    //if you found it, put the completed var into matchingID.completed
    if(matchingID){
        if(description && completed){
            matchingID.description = description
            matchingID.completed = completed

            res.json(matchingID)
         }
        else if(description){
            matchingID.description = description
            res.json(matchingID)
        }
        else if(completed){
            matchingID.completed = completed

            res.json(matchingID)
        }
        else {
            res.send("unable to process request. check spelling")
        }
    }   
    else {
        res.send("Can't find Todo")
    }
})








// function that returns a random interger
const getRandomInt = () => {
    let randomFloat = Math.random()
    let bigRandomFloat = randomFloat * 100000
    let randomInt = Math.floor(bigRandomFloat)

    return randomInt
}

app.listen(PORT, () => {console.log('Application is listening on port', PORT)} )