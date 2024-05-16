import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../JS/Actions/UserActions'
const Register = () => {
	const [newUser,setNewUser]=useState({})

	const dispatch=useDispatch()
	const Navigate =useNavigate()
	const handleRegister=(e)=>{
		setNewUser({...newUser,[e.target.name]:e.target.value})
	}
	console.log(newUser)
  return (
    <div className="box">
	<span className="box__borderline"></span>

	<form className="form" >
		<h2 className="form__title">Sign up</h2>

		<div className="form__box">
			<input className="form__input" type="text" required="required" name='name' onChange={(e)=>handleRegister(e)}/>
			<span className="form__span">name</span>
			<i className="form__line"></i>
		</div>
    <div className="form__box">
			<input className="form__input" type="email" required="required" name='email' onChange={(e)=>handleRegister(e)} />
			<span className="form__span">email</span>
			<i className="form__line"></i>
		</div>

		<div className="form__box">
			<input className="form__input" type="password" required="required" name='password' onChange={(e)=>handleRegister(e)} />
			<span className="form__span">Password</span>
			<i className="form__line"></i>
		</div>
    <div className="form__box">
			<input className="form__input" type="number" required="required" name='phone' onChange={(e)=>handleRegister(e)} />
			<span className="form__span">phone</span>
			<i className="form__line"></i>
		</div>
    

		<div className="form__links">
			
    <Link  to={"/Login"}><a className="form__link" >Sign In</a></Link>
		</div>
		<input className="form__submit" type="submit" value="Register" onClick={()=>(dispatch(register(newUser),Navigate('/Profile')))} />
	</form>

</div>
  )
}

export default Register