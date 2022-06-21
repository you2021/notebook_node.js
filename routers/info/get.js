const router = require('express').Router()
const mysql = require('../../db/info/get')

router.get('/', async(req, res) =>{

    try{
        // await mysql.get.length
        let data = await pool.query(`SELECT id, name, serial, state, type, user,dt_reg, dt_cor FROM info order by dt_reg DESC`)
        console.log(data[0])
        res.status(200).send(data[0])
    }catch(e){
        res.status(200).send({status:"fauled", code:"1111"})
    }
})

module.exports = router