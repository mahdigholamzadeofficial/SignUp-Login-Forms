const validate = (data,type) =>{
  const error ={};

  if(type=="signup"){

    if(!data.name.trim()){
      error.name = "username is required!"
    }else{
      delete error.name
    }

    if(!data.confirmPassword){
      error.confirmPassword = "Confirm the password!"
    }else if(data.password !== data.confirmPassword){
      error.confirmPassword = "The password did not match!"
    }else{
      delete error.confirmPassword
    }

    if(data.isAccepted){
      delete error.isAccepted
    }else{
      error.isAccepted = "Accept our regulations!"
    }

  }


  if(!data.email){
    error.email = "Email is required !"
  }else if(!/\S+@\S+\.\S+/.test(data.email)){
    error.email = "Email adress is invalid!"
  }else{
    delete error.email
  }

  if(!data.password){
    error.password = "Password is required!";
  }else if(data.password.length <6){
    error.password = "Password needs to be more than 6 character"
  }else{
    delete error.password
  }

  return error;

}


export default validate;