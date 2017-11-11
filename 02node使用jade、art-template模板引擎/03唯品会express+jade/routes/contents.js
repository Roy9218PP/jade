const express = require('express')

const router = express.Router()

const fs = require('fs')

router.get('/all_contents',(req,res)=>{

    const filePath = 'data_source/index.json'
    
    fs.exists(filePath,isExists=>{
        if(!isExists){
            res.status(200).json({result:"fail"})
        }
        else{
            fs.readFile(filePath,(err,data)=>{
                if(err){
                    res.status(200).json({result:"fail"})
                }
                else{
                    data = JSON.parse(data)

                    res.render('index',data)
                }
            })
        }
    })

    
})

module.exports = router