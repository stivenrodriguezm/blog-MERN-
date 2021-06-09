const express = require('express')
const postController = require('../controller/controller')
const router = express.Router()

router.get("/", postController.getPosts)
router.get("/post/:id", postController.getPost)
router.get("/UpdatePostGet/:id", postController.updatePostGet)
router.put("/UpdatePost/:id", postController.updatePost)
router.post("/deletePost/:id", postController.deletePost)

router.post("/NewPost", postController.createPost)

module.exports = router