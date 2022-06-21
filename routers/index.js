const router = require('express').Router()

require('../db/index')

router.use('/save',require('./info/save'))
router.use('/get', require('./info/get'))
router.use('/delete', require('./info/delete'))


module.exports = router