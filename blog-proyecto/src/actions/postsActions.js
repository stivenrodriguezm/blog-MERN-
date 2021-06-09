import { TRAER_TODOS, CARGANDO, ERROR } from '../types/postsTypes'
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
        //console.log('done') // para probar
    }
    catch (error) {
        console.log('Error:', error.message)
        dispatch({
            type: ERROR,
            payload: 'Informacion de usuario no disponible...'
        })
    }
}