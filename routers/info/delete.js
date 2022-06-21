const router = require('express').Router()
const mysql = require('../../db/info/delete')

router.post('/', async(req, res, next) =>{

    try{
        const idNm = req.body.idNm
        let num = idNm.split(",")

        console.log(num)
        await mysql.delete(num)
        res.status(200).send({status:"success", code:"0000"})
    }catch(e){
        console.log(e)
        res.status(200).send({status:"fauled", code:"1111"})
    }
})

module.exports = router