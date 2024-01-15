import express, { request, response } from "express";

const app = express()


const PORT = process.env.PORT || 3000



/*----------------------------Midllware----------------------------*/

/*----------------------------GET----------------------------*/

// app.get("/", (request, response) => {
//     response.status(201).send({msg: "Hello"})
// })

// app.get("/api/users", (request, response) => {

//     console.log(request.query)

//     const { filter, value } = request.query

//     response.send({onk: `${filter}|${value}`})


// })

/*----------------------------POST----------------------------*/

app.post('/api/users', (request, response) => {

    console.log(request.body) 
    return response.send(request.body)
})


app.listen(PORT, () => {
    console.log('running on port 3000')
})