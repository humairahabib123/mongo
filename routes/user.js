const express = require("express")
const router = express.Router()
const Users = require('../schema/user')

router.get("/add", (req, res, next) => {
    res.send('<form action="/user/addUser" method="POST"><input type="text" /><button>add</button></form>')
})

router.get('/getUser' , (req, res)=>{
    Users.find()
    .then(data => {console.log(data)
    res.send(data)
})
.catch(error => console.log(error))
})
router.post("/products", (req, res, next) => {
    console.log(req.body)
    res.send("Products...")
})
router.post("/addUser", (req, res) => {
    let newUser = {
        id: 01,
        name: "user1",
        age: 20,
        gender: "Female"
    };
    const user = new Users(newUser)
    user.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "User added to DB" })
        }
    })
    console.log(newUser)
})

module.exports = router