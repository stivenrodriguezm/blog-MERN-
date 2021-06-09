import { TRAER_POST, CARGANDO, ERROR} from '../types/postTypes'
import axios from 'axios'


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
