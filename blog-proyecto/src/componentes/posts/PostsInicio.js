import React, { Component } from 'react'
import * as postsActions from '../../actions/postsActions'
import { connect } from 'react-redux'
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'
import PrimerosPosts from './PrimerosPosts'


class PostsInicio extends Component {

    componentDidMount() {
        if(!this.props.posts.length){
            this.props.traerTodos()
          }
    }

    ponerContenido = () => {
        if(this.props.cargando) {
            return <Spinner />
        }
        if(this.props.error) {
            return <Fatal />
        }
        return <PrimerosPosts />
    }
        
    render() {
        return (
            <div>
                <h2>Ultimos posts:</h2>
                {this.ponerContenido()}
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.postsReducer
}

export default connect(mapStateToProps, postsActions)(PostsInicio)