import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../../JS/Actions/UserActions'

const Edit = () => {
let {id}=useParams()
console.log({id})
const dispatch=useDispatch()
const navigate=useNavigate()
const [newUser,setNewUser]=useState({})
const handleUpdate=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
}
  return (
    <div>
        <div className="form-wrapper">
      <h2>New Film Form</h2>
      <form>
        
        <div className="input-wrapper">
          <input className="form-input1" type="text" name="name" required="" onChange={(e)=>handleUpdate(e)} />
          <label>Name</label>
        </div>
        <div className="input-wrapper ">
          <input className="form-input1" type="text" name="email" required=""  onChange={(e)=>handleUpdate(e)}/>
          <label>email</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="text" name="password" required="" onChange={(e)=>handleUpdate(e)} />
          <label>newPassword</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="number" name="phone" required="" onChange={(e)=>handleUpdate(e)} />
          <label>phone</label>
          
        </div>
        <a  className="btn1" onClick={()=>(dispatch(editUser(id,newUser),navigate("/Profile")))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          update profile
        </a>
      </form>
    </div>
    </div>
  )
}

export default Edit