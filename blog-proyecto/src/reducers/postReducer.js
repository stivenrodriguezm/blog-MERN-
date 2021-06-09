import { TRAER_POST, CARGANDO, ERROR } from '../types/postTypes'

const INITIAL_STATE = {
    post: [],
    cargando: false,
    error: ''
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_POST:
            return { 
                ...state, 
                post: action.payload, 
                cargando: false,
                error: ''
            }
        case CARGANDO:
            return { ...state, cargando: true}

        case ERROR:
            return { ...state, error: action.payload, cargando: false}

        default: return state
    }

    
}