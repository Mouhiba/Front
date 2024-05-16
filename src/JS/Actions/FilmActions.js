import axios from "axios"
import { ADD_FILM, DELETE_FILM, FAIL_FILM, GET_FILMS, LOAD_FILM } from "../ActionTypes/ActionsTypes"



export const addFilm =(newFilm)=>async(dispatch) =>{
    dispatch({type:LOAD_FILM})
    try {
        let result = await axios.post('http://localhost:5000/api/film/addFilm', newFilm)
        dispatch({type:ADD_FILM, payload : result.data})
    } catch (error) {
        dispatch({type: FAIL_FILM, payload: error.response})
    }
    }

    //find film
export const getFilms =()=>async (dispatch) =>{
    dispatch({type:LOAD_FILM})
    try {
        let result =await axios.get('http://localhost:5000/api/film/films')
        dispatch({type:GET_FILMS, payload: result.data})
    } catch (error) {
        dispatch({type:FAIL_FILM,payload:error.response})
    }
}

//delete announce
export const deleteFilm =(id) =>async (dispatch)=>{
    dispatch({type:LOAD_FILM})
    try {
       let result=await axios.delete(`http://localhost:5000/api/film/deleteFilm/${id}`)
        dispatch({type:DELETE_FILM,payload:result.data})
        
    } catch (error) {
        dispatch({type:FAIL_FILM,payload:error.response})
    }
}
