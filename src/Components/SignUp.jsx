import React,{useState, useEffect} from 'react'
import validate from './validate';
import notify from './toast';
import { ToastContainer } from 'react-toastify';
import styles from "./SignUp.module.css";
import {Link} from "react-router-dom"

const  SignUp =()=> {


  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted:false
  })

  const dataChangeHandler=(e)=>{
    if(e.target.name == "isAccepted"){
      setData({...data,isAccepted:e.target.checked})
    }
    else{
      setData({...data,[e.target.name]:e.target.value})
    }
  }

  useEffect(
    ()=>{
      setErrors(validate(data,"signup"));
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
          name:true,
          password:true,
          email:true,
          confirmPassword:true,
          isAccepted:true,
        }
      )
      notify("Invalid data!","error")
    }
  }


  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>

        <div className={styles.formField}>
          <label>Name</label>
          <input 
            className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
            name='name'
            onFocus={focusHandler}
            onChange={dataChangeHandler}
            value={data.name}
            type="text" 
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

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

        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
            name='confirmPassword'
            onFocus={focusHandler}
            onChange={dataChangeHandler}
            value={data.confirmPassword}
            type="password"
          />
          {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div className={styles.formField}>
          <div className={styles.checkBoxContainer }>
            <label>I accept terms of privacy policy</label>
            <input
              name='isAccepted'
              onFocus={focusHandler}
              onChange={dataChangeHandler}
              value={data.isAccepted}
              type="checkbox"
            />
          </div>
          {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type='submit'>sign Up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}

export default SignUp;