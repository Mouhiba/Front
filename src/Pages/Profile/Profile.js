import React from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFilms } from '../../JS/Actions/FilmActions'
const Profile = () => {
  const user=useSelector(state=>state.UserReducer.user)
  console.log(user)
  const dispatch=useDispatch()
 

  return (
    <div className="container1">
        <div className="profile_container">
          <div className="back"></div>
          <div className="profile"></div>
        </div>
        <div className="profile_infos">
          <h1 className="name"  style={{color:"hsla(339, 100%, 55%, 1)"}}>{user.name}</h1>
          <h2 className="occupation">{user.email}</h2>
          <Link to={'/Films'}><button onClick={()=>dispatch(getFilms())}>Go to Film List</button></Link>
          <Link to={`/EditProfile/${user._id}`}><button>edit profile</button></Link>
        </div>
      </div>
  )
}

export default Profile