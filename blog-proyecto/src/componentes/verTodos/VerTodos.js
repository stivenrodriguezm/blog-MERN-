import React, { Component } from 'react'
import * as verTodosActions from '../../actions/verTodosActions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

class PostsInicio extends Component {
    state = { loading: false}
    
    componentDidMount() {
        this.props.traerTodos()
    }

    deletePost = async (e) => {
        e.preventDefault()
        var id = await e.target.name
        this.props.deletePost(id)
    }

    spinnerFatal = () => {
        if(this.props.cargando) {
            return <Spinner />
        }
        if(this.props.error) {
            return <Fatal />
        }
    }

    completarTabla = () => {
        let posts = this.props.posts.posts
        if(posts) {
            return(
                <tbody>
                    { 
                        posts.reverse().map((post) => (
                            <tr key={post._id}>
                                <td>{post._id}</td>         
                                <td>{post.title}</td>         
                                <td id={post._id}>
                                    <Link to={`/UpdatePost/${post._id}`}>Editar</Link>    
                                </td>
                                <td>
                                    <Link to={'/ViewAll'} name={post._id} onClick={(e) => this.deletePost(e)}>
                                        Eliminar
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            )
        }
    }
        
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Titulo</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    {!this.props.cargando
                        ? this.completarTabla()
                        : (<tbody></tbody>)
                    }
                </table>
                {this.spinnerFatal()}
            </div>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.verTodosReducer
}

export default connect(mapStateToProps, verTodosActions)(PostsInicio)