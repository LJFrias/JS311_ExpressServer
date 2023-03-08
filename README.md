# JS311_ExpressServer
backend
always running
listening for request





HTTP-
Request
  -verb (GET, PUT, POST, DELETE)
  -URL or domain (google.com, amazon.com)
  -route (https://github.com/features/actions)
  -query (sometimes) the stuff after the ?   https://www.google.com/search?q=chickens&oq=chickens&aqs=chrome.0.0i271j46i433i512j0i131i433i457i512j0i402j0i402i512j0i512l5.918j0j7&sourceid=chrome&ie=UTF-8
  -body (sometimes)
  -header (sometimes for extra options or parameters)

Response
  -body
  -response code
  -header (usually don't care about this)

expressjs.com

When we are working on our computers, we are the server

localhost:8080/(route)

CLASS 3

truthy and falsey

false value
  -0
  -undefined
  -NaN
  -false
  -empty string
  -null

everything els is true
*****************************

We are going to build our own todo app with our own API interface and our own data

we are building a todo backend and here is what we want to support:

  -route that returns all the todos in our list
    GET /todos 
    return an array of todo objects
  
  -route that returns a single todo based on the id provided
    GET /todos/:id
      :id is the id of the todo to return if it exists otherwise return a message (id not found)
  
  -route that will delete a single todo based on the id provided
    DELETE /todos/:id
      :id is the id of the todo that was deleted return message of the item that was deleted

  -route that adds a single todo to the list
    POST /todos
      body should includes an object that has at least a description.
      we will make a function that generates a random id that is added when the new todo is created. 
      example: body: {"description" : "feed the dog", "completed" : false}

  -route that updates a existing todo based on the id provided
    PUT /todos/:id
      ex: /todos/10, body-{"description": "buy groceries", "completed" : true}

**POST and PUT use the body

todo object should have:
  -id---is the id of todo item
  -description--- what the todo is
  -completed--- true or false

*********************
How we are going to generate a random id:

Math.random() 
   -generates a random number betweeen 0 and 1
   -it will NEVER return 1

0.32234585321321 * 100000
322345.85321321
Math.floor(322345.85321321) = 322345
