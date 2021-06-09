const mongoose = require('mongoose')
const schema = mongoose.Schema

const postSchema = new schema({
    title: {type: String},  
    body: {type: String}  
})

module.exports = mongoose.model("posts", postSchema)