import express from "express";
import winston from 'winston'
import { promises as fs} from 'fs' 
import cors from 'cors'
import carrosRoutes from './routes/carrosRoutes.js'


//destructuring
const { readFile, writeFile} = fs

//global db
global.myDb = 'car-list.json'

//config
const app = express()
app.use(express.json())
app.use('/carros', carrosRoutes)



//routes
app.use('/' ,(req, res) => {
    res.send('chegou')
})

// listando a porta
app.listen(3000, () => {
    console.log('servidor ligado')
})