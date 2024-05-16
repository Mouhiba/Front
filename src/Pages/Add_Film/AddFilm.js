import React, { useState } from 'react'
import './AddFilm.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addFilm, getFilms } from '../../JS/Actions/FilmActions'
const AddFilm = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [newFilm,setNewFilm]=useState({})
    const handleNewFilm=(e)=>{
        setNewFilm({...newFilm,[e.target.name]:e.target.value})
    }
    const handleConfirm=async()=>{
        await dispatch(addFilm(newFilm))
        dispatch(getFilms())
        navigate("/Films")
    }
  return (
    <div><div className="main">
    <div className="form-wrapper">
      <h2>New Film Form</h2>
      <form>
        
        <div className="input-wrapper">
          <input className="form-input1" type="text" name="title" required="" onChange={(e)=>handleNewFilm(e)} />
          <label>title Name</label>
        </div>
        <div className="input-wrapper ">
          <input className="form-input1" type="text" name="type" required="" onChange={(e)=>handleNewFilm(e)} />
          <label>type</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="text" name="photo" required="" onChange={(e)=>handleNewFilm(e)} />
          <label>photo</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="number" name="rate" required=""  onChange={(e)=>handleNewFilm(e)}/>
          <label>rate</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="number" name="minAge" required="" onChange={(e)=>handleNewFilm(e)}/>
          <label>min age</label>
        </div>
        <div className="input-wrapper">
          <input className="form-input1" type="text" name="posterUrl" required onChange={(e)=>handleNewFilm(e)}/>
          <label>Poster Url</label>
        </div>
        
        <a  className="btn1" onClick={()=>handleConfirm()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add New Film
        </a>
      </form>
    </div>
  </div></div>
  )
}

export default AddFilm