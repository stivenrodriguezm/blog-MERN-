import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import nuevoPostReducer from './nuevoPostReducer'
import updatePostReducer from './updatePostReducer'
import verTodosReducer from './verTodosReducer'

export default combineReducers({
    postsReducer,
    postReducer,
    nuevoPostReducer,
    updatePostReducer,
    verTodosReducer
})