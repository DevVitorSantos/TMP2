import express from "express";
import { promises as fs} from 'fs'
import util from "../util/carrosFuncoes.js";


//destructuring
const { readFile, writeFile} = fs

const router = express.Router()

router.get('/' , (req, res, next) => {
    res.send('chegou na rota de carros')
})

router.get('/marcas/maisModelos' , async(req, res, next) => {
    
    try {
        const data = JSON.parse(await readFile(global.myDb))
        const response = util.marcasComMaisModelos(data)
        res.send(response)  
        
    } catch (error) {
        
        next(error)
    }

})

router.get('/marcas/menosModelos' , async(req, res, next) => {
    
    try {
        const data = JSON.parse(await readFile(global.myDb))
        const response = util.marcaComMenosModelos(data)
        res.send(response)  
    } catch (error) {
        next(error)
    }
})

router.get('/marcas/listaMaisModelos/:id' , async(req, res, next) => {
    const paramItem = parseInt(req.params.id)
   
    try {
        const data = JSON.parse(await readFile(global.myDb))
        const response = util.listaMaisModelos(data, paramItem)
        res.send(response)  
    } catch (error) {
        next(error)
    }
})

router.get('/marcas/listaMenosModelos/:id' , async(req, res, next) => {
    const paramItem = parseInt(req.params.id)
   
    try {
        const data = JSON.parse(await readFile(global.myDb))
        const response = util.listaMenosModelos(data, paramItem)
        res.send(response)  
    } catch (error) {
        next(error)
    }
})

router.post('/marcas/listaModelos' , async(req, res, next) => {
    const paramItem = req.body.marca
    
    try {
        const data = JSON.parse(await readFile(global.myDb))
        const response = util.listaModelosPorMarca(data, paramItem)
        res.send(response)  
    } catch (error) {
        next(error)
    }
})




//error handler
router.use((err, req, res, next)=>{
    
    console.log(err)
    res.status(400).send( { error: err.message})
})

export default router