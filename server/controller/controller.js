const Post = require('../schema/schema')

exports.getPosts = (req,res) => {
    console.log("getting posts")
    const posts = Post.find()
    .then(posts => {
        res.json({posts})
    })
}

exports.getPost = (req,res) => {
    const post = Post.findById(req.params.id)
    .then(post => {
        res.json({post})
    })
}

exports.updatePostGet = (req,res) => {
    const post = Post.findById(req.params.id)
    .then(post => {
        res.json({post})
    })
}

exports.updatePost = (req,res) => {
    console.log("body: ", req.body)

    Post.findOneAndUpdate({
        _id: req.params.id
    }, {
        _id: req.params.id,
        title: req.body.title,
        body: req.body.body
    }).then(
        () => {
          res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}

exports.createPost = (req,res) => {
    const post = new Post(req.body)

    console.log(post)

    post.save().then(result => {
        res.json({
            post: result
        })
    })
}

exports.deletePost = (req,res) => {
    console.log("deleting back")
    Post.findOneAndDelete({_id: req.params.id}).then(
        () => {
            res.status(201).json({
            message: 'Thing deleted'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
            error: error
            });
        }
    );
}