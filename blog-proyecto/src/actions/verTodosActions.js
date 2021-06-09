import { TRAER_TODOS, CARGANDO, ERROR } from '../types/verTodosTypes'
import axios from 'axios'


export const traerTodos = () => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try {
        const respuesta = await axios.get('http://localhost:4000/')
        dispatch({
            type: TRAER_TODOS,
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

export const deletePost = (id) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })
    try {
        await axios.post(`http://localhost:4000/deletePost/${id}`)
        const respuestaGet = await axios.get(`http://localhost:4000/`)
        dispatch({
            type: TRAER_TODOS,
            payload: respuestaGet.data
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