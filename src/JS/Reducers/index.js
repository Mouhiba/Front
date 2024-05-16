import {combineReducers} from 'redux'
import UserReducer from "./UserReducer"
import FilmReducer from './FilmReducer'
const rootReducer=combineReducers({UserReducer,FilmReducer})

export default rootReducer