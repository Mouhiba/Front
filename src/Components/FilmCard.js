import React, { useState } from 'react'
import './FilmCard.css'
import { useDispatch } from 'react-redux'
import { deleteFilm } from '../JS/Actions/FilmActions'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const FilmCard = ({film}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  return (
    <div className="container" style={{margin:"30px"}}>
  <div className="row">
    <div className="col-12 text-center mt-5">
      <div className="card m-auto" style={{width: "25rem"}}>
        <div className="card-head" style={{backgroundImage:`url(${film.photo})`}}></div>
        <p className="p1" style={{position:"absolute", top:"20px", textAlign: "start"}}>
          <i className="bi bi-balloon-heart px-2"></i>{film.title}
          <span className="triangel1"></span>
        </p>
        <p className="p2" style={{position:"absolute", top:"50px", textAlign: "start"}}>
          <i className="bi bi-bell px-2"></i>{film.type}
          <span className="triangel2"></span>
        </p>
        <p className="p3" style={{position:"absolute", top:"80px", textAlign: "start"}}>
          <i className="bi bi-bank2 px-2"></i>+{film.minAge}
          <span className="triangel3"></span>
        </p>
        <p className="p4" style={{position:"absolute", top:"110px", textAlign: "start"}}>
          <i className="bi bi-command px-2"></i>rate:{film.rate}
          <span className="triangel4"></span>
        </p>
        <p className="p5" style={{position:"absolute", top:"140px", textAlign: "start"}}>
          <i className="bi bi-arrows-move px-2"></i>Powered By:Netflix
          <span className="triangel5"></span>
        </p>
        <div className="card-body p-1">
          <h5 className="card-title">Watch Trailer</h5>
          
          <a  className="btn btn-warning">Trailer</a>
          <a  className="btn btn-warning" onClick={()=>(dispatch(deleteFilm(film._id)),navigate("/Profile"))} >Delete Film</a>
          
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default FilmCard