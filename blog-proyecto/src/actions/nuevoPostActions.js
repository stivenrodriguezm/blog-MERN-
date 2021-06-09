import { GUARDAR, CARGANDO, ERROR, CAMBIO_TITULO, CAMBIO_BODY } from '../types/nuevoPostTypes'
import axios from 'axios'

export const nuevoPost = (nuevo_post) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    
    try {
        await axios.post('http://localhost:4000/NewPost', nuevo_post)
        dispatch({
            type: GUARDAR
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

export const submit = (nuevoPost) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try {
        await axios.post('http://localhost:4000/NewPost', nuevoPost)
        dispatch({
            type: GUARDAR
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


