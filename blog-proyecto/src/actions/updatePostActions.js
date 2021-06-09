import { CARGANDO, ERROR, CAMBIO_TITULO, CAMBIO_BODY, TRAER_POST, UPDATE } from '../types/updatePostTypes'
import axios from 'axios'

export const update = (updatedPost, id) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try {
        await axios.put(`http://localhost:4000/UpdatePost/${id}`, updatedPost)
        const respuestaDos = await axios.get(`http://localhost:4000/UpdatePostGet/${id}`)
        dispatch({
            type: UPDATE,
            payload: respuestaDos.data
        })
    }
    catch (error) {
        console.log(error.message)
        dispatch({
            type: ERROR,
            payload: 'Intenta mas tarde...'
        })
    }
}

export const traerPost = (post_id) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    
    try {
        const respuesta = await axios.get(`http://localhost:4000/post/${post_id}`)
        dispatch({
            type: TRAER_POST,
            payload: respuesta.data
        })
    }
    catch (error) {
        console.log('Error:', error.message)
        dispatch({
            type: ERROR,
            payload: 'Informacion de usuario no disponible...'
        })
    }
}

export const cambioTitulo = (titulo) => (dispatch) => {
    dispatch({
        type: CAMBIO_TITULO,
        payload: titulo
    })
}
export const cambioBody = (body) => (dispatch) => {
    dispatch({
        type: CAMBIO_BODY,
        payload: body
    })
}