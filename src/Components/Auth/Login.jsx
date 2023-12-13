import React, { useState } from 'react'
import Joi from "joi"
import { Link } from 'react-router-dom';
const Login = () => {

  const [errorList, setErrorList] = useState([])
  const [user, setUser] = useState({
   
    email: '',
    password: '',
  });

  function getUserData(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setUser(myuser)
    // console.log(user)

  }

  function validateRegisterForm() {

    let schema = Joi.object({
     
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

    })
    return schema.validate(user, { abortEarly: false })
  }

  function submitLogin(e){
    e.preventDefault();
    let validation = validateRegisterForm();

    if (validation.error) {
      setErrorList(validation.error.details);


    }
    else {
      console.log("tmm")
     
    }
  }

  return (
    <div className=' vh-100 d-flex justify-content-center align-items-center'>
    <div className=''>
    <h1 className='text-center text-facebook fw-bolder letterSpacing'>FaceBook</h1>
       <form className="row register m-auto  w-50 g-3"onSubmit={submitLogin}>
       {errorList.map((error, i) => {
            if (error.context.label === 'password') {
              return <p key={i} className='w-100 p-2  text-danger'>The password is weak and must not be less than five numbers </p>
            } else {
              return <p key={i} className='w-100 p2 text-danger'>{error.message} </p>

            }
          })}
     
       <div className="col-md-12">
         <label htmlFor="inputEmail4" className="form-label">البريد الالكترونى</label>
         <input type="email" className="form-control" id="inputEmail4" onChange={getUserData} />
       </div>
       <div className="col-md-12">
         <label htmlFor="inputPassword4" className="form-label">كلمة السر</label>
         <input type="password" className="form-control" id="inputPassword4"onChange={getUserData} />
       </div>
      

       <div className="col-12 text-center">
         <button type="submit" className=" bg-facebook">انشاء حساب فى فيسبوك </button>
       </div>
       <div className="col-12 d-flex justify-content-center align-items-center">
       <div className='line'></div>
       <p className='para'>لدى حساب</p>
       <div className='line'></div>
       </div>
       <div className="col-12 text-center">
       <Link to="/register"> <p className='nav-login fw-bold text-facebook '> انشاء حساب </p></Link>
       </div>
     </form>
    </div>
   </div>
  )
}

export default Login