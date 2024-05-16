
import axios from "axios"
import { CURRENT_USER, EDIT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/ActionsTypes"

// register user 
export const register =(newUser)=>async(dispatch) =>{
    dispatch({type:LOAD_USER})
    try {
        let result = await axios.post('http://localhost:5000/api/user/register', newUser)
        dispatch({type:REGISTER_USER, payload : result.data})
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response})
    }
    }
    //Login user 
    
    export const login =(user)=>async(dispatch) =>{
        dispatch({type:LOAD_USER})
        try {
            let result = await axios.post('http://localhost:5000/api/user/login', user)
            dispatch({type:LOGIN_USER, payload : result.data})
        } catch (error) {
            dispatch({type: FAIL_USER, payload: error.response})
        }
        }
    
        //current user
    
        export const current = ()=>async (dispatch) =>{
            dispatch({type:LOAD_USER})
            try {
                const config = {
                    headers: {authorization: localStorage.getItem('token')}
                }
                let result = await axios.get('http://localhost:5000/api/user/current', config)
                dispatch({type:CURRENT_USER, payload:result.data})
            } catch (error) {
                dispatch({type:FAIL_USER, payload:error.response})
            }
        }
    
        // logout user
        export const logout = () => async (dispatch) =>{
            dispatch({type:LOGOUT_USER})
        }

        export const editUser = (_id,newUser)=>async (dispatch) =>{
            dispatch({type:LOAD_USER})
            try {
                
                let result = await axios.put(`http://localhost:5000/api/user/edit/${_id}`, newUser)
                dispatch({type:EDIT_USER, payload:result.data})
            } catch (error) {
                dispatch({type:FAIL_USER, payload:error.response})
            }
        }