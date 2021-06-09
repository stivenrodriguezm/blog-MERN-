import { GUARDAR, CARGANDO, ERROR, CAMBIO_TITULO, CAMBIO_BODY } from '../types/nuevoPostTypes'


const INITIAL_STATE = {
    nuevoPost: [],
    cargando: false,
    error: '',
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GUARDAR:
            return {
                ...state,
                nuevoPost: action.payload,
                cargando: false,
                error: ''
            }
        case CAMBIO_TITULO:
            return { ...state, titulo: action.payload }

        case CAMBIO_BODY:
            return { ...state, body: action.payload}

        case CARGANDO:
            return { ...state, cargando: true}

        case ERROR:
            return { ...state, error: action.payload, cargando: false}
        default: return state
    }
}