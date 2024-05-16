import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilmCard from './FilmCard'
import './FilmList.css'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFilms } from '../JS/Actions/FilmActions'

const FilmList = () => {
  const dispatch = useDispatch()
    const films=useSelector(state=>state.FilmReducer.films)
    
    
    
    console.log(films)
  return (
    <div ><Link to={'/AddFilm'}><button className="glow-on-hover"  type="button" style={{marginLeft:"400px"}}>Add New Film</button></Link>
    
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",margin:"30px"}}>
        
        {films?.map(film=><FilmCard film={film} key={film.id} />)}
        </div></div>
  )
}

export default FilmList