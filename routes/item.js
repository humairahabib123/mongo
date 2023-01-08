const express = require("express")
const router = express.Router()

router.get("/add",(req, res, next)=>{
    res.send('<form action="/user/items" method="POST"><input type="text" /><button>add</button></form>')
})
router.post("/items", (req,res, next)=>{
    console.log(req.body)
    res.send("items...")
})

module.exports=router