import React,{useState, useEffect} from 'react'
import validate from './validate';
import notify from './toast';
import { ToastContainer } from 'react-toastify';
import styles from "./SignUp.module.css";
import {Link} from "react-router-dom"
const  Login =()=> {


  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data,setData] = useState({
    email:"",
    password:""
  })

  const dataChangeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  useEffect(
    ()=>{
      setErrors(validate(data,"login"));
    },
    [data,touched]
  )

  const focusHandler=(e)=>{
    setTouched({...touched,[e.target.name] : true})
  } 

  const submitHandler=(e)=>{
    e.preventDefault();
    if(!Object.keys(errors).length){
      console.log(data);
      notify("You signed in successfully!","success")
    }else{
      setTouched(
        {
          password:true,
          email:true,
        }
      )
      notify("Invalid data!","error")
    }
  }


  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Login</h2>

        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
            name='email'
            onFocus={focusHandler}
            onChange={dataChangeHandler}
            value={data.email}
            type="email"
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label>Password</label>
          <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} name='password' onFocus={focusHandler} onChange={dataChangeHandler} value={data.password} type="password" />
          {errors.password && touched.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.formButtons}>
          <Link to="/signup">sign Up</Link>
          <button type='submit'>Login</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Login;