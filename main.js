//check
console.log("Im working")

const express = require("express")

//create an application object using express
let app = express()
// define the port we will communicate through
let PORT = 8080

// we are at domain localhost:8080
// route is hello

// for any request where the route is "/hello"
// send this string as the response
app.get("/hello", (req, res) => {
    res.send('Hello from the hello route')
})

// write a GET route deffinition that will let me get by a name
// request /hello/Luke
// request /hello/Robin
app.get("/hello/:name", (req, res) => {
    let value = req.params.name
    let message = `Hello ${value}!`

    res.send(message)
})

// request query
// request url contains /bye?name=mike --> "see ya later mike"
// request url contains /bye?name=jill --> "see ya later jill"
// request url is just /bye             --> "see ya later"

//hint is you get the query parameters using: req.query.name
app.get("/bye", (req, res) => {
    const name = req.query.name
    if(name){
        let message = `See ya later ${name}`
        res.send(message)
    }
    else {
        res.send("See ya later")
    }
})


app.listen(PORT, () => {console.log('Application is listening on port', PORT)} )