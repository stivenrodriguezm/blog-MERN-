import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as postActions from '../../actions/postActions'
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

class Post extends Component {
    componentDidMount() {
        const {
            match: { params: { id } }
        } = this.props

        this.props.traerPost(id)
    }

    mostrarBlog(){
        if(this.props.cargando) {
            return <Spinner />
        }
        if(this.props.error) {
            return <Fatal />
        }
        let post = this.props.post.post
        if(post){
            return(
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )
        }
        
    }

    render(){
        return(
            <div>
                { this.mostrarBlog() }
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.postReducer
}

export default connect(mapStateToProps, postActions)(Post)