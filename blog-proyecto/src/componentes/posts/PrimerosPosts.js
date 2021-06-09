import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const PrimerosPosts = (props) => {

    const ponerPosts = () => {        
        let posts = props.posts.posts
        
        if(posts) {
            let postsCount = posts.length
            if(postsCount >= 5){
                var lasFivePosts = postsCount - 5
            }
            return (
                posts.slice(lasFivePosts,postsCount).reverse().map((post, key) => (
                <div className="contenedorPost" key={post._id}>
                    <Link className="anclaInicio" to={`/post/${post._id}`}>
                        <div className="post" key={key}>
                                <p>Titulo: {post.title}</p>
                                <p>{post.body}</p>
                        </div>
                    </Link>
                </div>
                ))
            )
        }
    }

    return (
        <div>
            <div>
                { ponerPosts() }
            </div>
        </div>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.postsReducer
}

export default connect(mapStateToProps)(PrimerosPosts)