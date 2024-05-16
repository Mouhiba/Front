import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../JS/Actions/UserActions'
const Login = () => {
	const dispatch=useDispatch()
	const Navigate=useNavigate()
	const [user,setUser]=useState({})
	const handleLogin=(e)=>{
		setUser({...user,[e.target.name]:e.target.value})

	}
	console.log(user)
  return (
    <div className="box">
	<span className="box__borderline"></span>

	<form className="form" >
		<h2 className="form__title">Sign in</h2>

		<div className="form__box">
			<input className="form__input" type="text" required="required" name='email' onChange={(e)=>handleLogin(e)}/>
			<span className="form__span1">Email</span>
			<i className="form__line"></i>
		</div>

		<div className="form__box">
			<input className="form__input" type="password" required="required" name='password' onChange={(e)=>handleLogin(e)} />
			<span className="form__span1">Password</span>
			<i className="form__line"></i>
		</div>

		<div className="form__links">
			<a className="form__link" href="#">Forgot Password</a>
			<Link  to={"/Register"}><a className="form__link" >Signup</a></Link>
		</div>
		<Link to={'/Profile'} ><input className="form__submit" type="submit" value="Login" onClick={()=>(dispatch(login(user)),Navigate("/Profile"))} /></Link>
	</form>

</div>
  )
}

export default Login