import { ADD_FILM, DELETE_FILM, FAIL_FILM, GET_FILMS, LOAD_FILM } from "../ActionTypes/ActionsTypes"



const initialState ={
    films:null,
    loadFilm:false,
    errors:null
}


// pure function

const FilmReducer =(state=initialState,{type,payload}) =>{
    switch (type) {
        case LOAD_FILM:
            return{...state,loadFilm:true}
        case ADD_FILM:
            return{...state,films:payload.newFilm,loadFilm:false}
        case GET_FILMS:
            return{...state,loadFilm:false,films:payload.films}
        case DELETE_FILM:
            return{...state,loadFilm:false,films:null}
        case FAIL_FILM:
            return{...state,loadFilm:false,errors:payload}

        default:
            return state
    }
}

export default FilmReducer;