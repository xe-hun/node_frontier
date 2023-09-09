const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{

    const {name} = req.body
    if(!name){
        res.status(400).json({success:false, msg: 'pls provide a name'})
    }else{
        res.status(201).json({success: true})
    }
   
})

module.exports = router