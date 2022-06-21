const router = require('express').Router()
const mysql = require('../../db/info/save')

router.post('/', async(req, res, next) =>{

    try{
        const name = req.body.name
        const serial = req.body.serial
        const state = req.body.state
        const type = req.body.type
        const user = req.body.user
    
        console.log(name, serial,state, type, user)

        await mysql.save(name, serial, state, type, user)
        res.status(200).send({status:"success", code:"0000"})
    }catch(e){
        console.log(e)
        res.status(200).send({status:"fauled", code:"1111"})
    }
})

module.exports = router