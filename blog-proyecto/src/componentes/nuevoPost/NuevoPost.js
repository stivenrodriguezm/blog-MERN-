import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as nuevoPostActions from '../../actions/nuevoPostActions'

class NuevoPost extends Component {   
    
    guardar = () => {
        let info = this.props

        let titulo = info.titulo
        let body = info.body

        let nuevoPost = {
            title: titulo,
            body: body
        }

        this.props.submit(nuevoPost)
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    cambioTitulo = (event) => {
        this.props.cambioTitulo(event.target.value)
    }

    cambioBody = (event) => {
        this.props.cambioBody(event.target.value)
    }

    render(){
        return(
            <div>
               <form>
                    <br/><br/>
                    Titulo: <input name="titulo" onChange={this.cambioTitulo}></input> <br/><br/>
                    body: <input name="body" onChange={this.cambioBody}></input> <br/><br/>
               </form>
                <button onClick={this.guardar}>Enviar</button>
            </div>
        )
    }
}


const mapStateToProps = (reducers) => {
    return reducers.nuevoPostReducer
}

export default connect(mapStateToProps, nuevoPostActions)(NuevoPost)