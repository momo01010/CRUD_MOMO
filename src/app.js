const express = require('express')
const app = express()

//Permite usar json
app.use(express.json())

//rutas
const usersRouter = require('./users/users.router')


//Probamos el funcionamiento correcto 
app.get('/', (req, res)=>{
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1', usersRouter)


app.listen(9999, ()=>{
    console.log('Server started at port 9999')
})