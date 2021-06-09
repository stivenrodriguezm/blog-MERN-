import React, { Component } from 'react'
import {connect} from 'react-redux'
import Spinner from '../general/Spinner'
import Fatal from '../general/Fatal'

import * as updatePostActions from '../../actions/updatePostActions'

class UpdatePost extends Component {   

    componentDidMount() {
        const {
            match: { params: { id } }
        } = this.props

        this.props.traerPost(id)
    }

    state = {
        reload: false
      };
    actualizar = () => {
        const {
            match: { params: { id } }
        } = this.props

        let info = this.props
        let titulo = info.titulo || this.props.updatedPost.post.title
        let body = info.body || this.props.updatedPost.post.body

        let updatedPost = {
            title: titulo,
            body: body
        }

        this.props.update(updatedPost, id)
        this.refreshPage()
    }
    refreshPage = () => {
        this.setState(
          {reload: true},
          () => this.setState({reload: false})
        )
    }

    cambioTitulo = (event) => {
        this.props.cambioTitulo(event.target.value)
    }

    cambioBody = (event) => {
        this.props.cambioBody(event.target.value)
    }

    form = () => {
        if(this.props.cargando) {
            return <Spinner />
        }
        if(this.props.error) {
            return <Fatal />
        }
        if(this.props.updatedPost.post){       
            var post = this.props.updatedPost.post     
            return(
                <div>
                    <form>
                        <br/><br/>
                        Titulo: <input name="titulo" defaultValue={post.title} onChange={this.cambioTitulo}></input> <br/><br/>
                        body: <input name="body" defaultValue={post.body} onChange={this.cambioBody}></input> <br/><br/>
                    </form>
                </div>
        )}
    }

    render(){
        return(
            <div>
                {this.form()}
                <button onClick={this.actualizar}>Actualizar</button>
            </div>
        )
    }
}

const mapStateToProps = (reducer) => {
    return reducer.updatePostReducer
}


export default connect(mapStateToProps, updatePostActions)(UpdatePost)