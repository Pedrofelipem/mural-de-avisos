const express = require("express")
const bodyParser = require('body-parser')
const posts = require("../model/posts")
const router = express.Router()
const cors = require("cors")

const options = {
    origin: "http://localhost:5000"
}

router.use(cors(options))


router.get("/all", (req, res)=>{

    res.json(JSON.stringify(posts.getAll()))

})

router.post("/new", bodyParser.json(), (req, res) => {
    
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send("post adicionado")
})

module.exports = router