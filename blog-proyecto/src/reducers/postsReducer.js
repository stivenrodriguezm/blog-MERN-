import { TRAER_TODOS, CARGANDO, ERROR } from '../types/postsTypes'

const INITIAL_STATE = {
    posts: [],
    cargando: false,
    error: ''
}
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_TODOS:
            return { 
                ...state, 
                posts: action.payload, 
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