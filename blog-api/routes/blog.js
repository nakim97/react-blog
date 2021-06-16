const express = require("express")
const Blog = require("../models/blog")
const {BadRequestError,NotFoundError} = require("../utils/errors")
const router = express.Router()

router.post("/", async(req,res,next) => {
    try{
        // handle creating a new post
        const newPost = req.body.post
        if (!newPost){
            return next(new BadRequestError("No post found in request."))
        }
        const post = await Blog.createPost(newPost)
        res.status(201).json({post:{}})
    }catch(err){
        next(err)
    }
})

module.exports = router