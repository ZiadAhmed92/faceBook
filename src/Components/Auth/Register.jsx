import React, { useState } from 'react'
import "./Auth.css"
import Joi from "joi"
import { Link } from 'react-router-dom'
const Register = () => {
  const [errorList, setErrorList] = useState([])
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender:"",
  });

  function getUserData(e) {
    let myuser = { ...user };
    myuser[e.target.name] = e.target.value;
    setUser(myuser)
    console.log(myuser)

  }
  
  function validateRegisterForm() {

    let schema = Joi.object({
      firstName: Joi.string().min(3).max(10).required(),
      lastName: Joi.string().min(3).max(10).required(),
      gender: Joi.string().min(2).max(4).required(),
      // birth_year: Joi.number()
      // .integer()
      // .min(1900)
      // .max(2013),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

    })
    return schema.validate(user, { abortEarly: false })
  }

  function submitRegister(e){
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
      
     <div >
     <h1 className='text-center text-facebook fw-bolder letterSpacing'>FaceBook</h1>
        <form className="row register m-auto  w-50 " onSubmit={submitRegister}>
        {errorList.map((error, i) => {
            if (error.context.label === 'password') {
              return <p key={i} className='w-100 p-2  text-danger'>The password is weak and must not be less than five numbers </p>
            } else {
              return <p key={i} className='w-100 p2 text-danger'>{error.message} </p>

            }
          })}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">الاسم الاول</label>
          <input type="text" className="form-control" id="firstName" name="firstName"onChange={getUserData} />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">الاسم التانى</label>
          <input type="text" className="form-control" id="lastName"name="lastName"onChange={getUserData} />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">البريد الالكترونى</label>
          <input type="email" className="form-control" id="inputEmail4" name="email" onChange={getUserData} />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">كلمة السر</label>
          <input type="password" className="form-control" id="inputPassword4"name="password" onChange={getUserData} />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputState" className="form-label">الجنس</label>
          <select id="inputState" className="form-select" required name='gender' onChange={(e)=>getUserData(e)}>
            <option >ذكر</option>
            <option >أنثى</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="day" className="form-label">اليوم</label>
          <input type="num" className="form-control" id="day" />
        </div>
        <div className="col-md-4">
          <label htmlFor="month" className="form-label">الشهر</label>
          <input type="num" className="form-control" id="month" />
        </div>
        <div className="col-md-4">
          <label htmlFor="year" className="form-label">السنة</label>
          <input type="num" className="form-control" id="year" />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn-register mt-4 mb-2">انشاء حساب فى فيسبوك </button>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
        <div className='line'></div>
        <p className='para'>لدى حساب</p>
        <div className='line'></div>
        </div>
        <div className="col-12 text-center">
        <Link to="/login"> <p className='nav-login fw-bold text-facebook'>تسجيل الدخول</p></Link> 
        </div>
      </form>
     </div>
    </div>
  )
}

export default Register