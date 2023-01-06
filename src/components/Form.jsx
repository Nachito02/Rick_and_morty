import React, {useState} from 'react'
import styled from '../styles/Form.module.css'

export function validate (inputs) { 
  
      let errors = {}
  
     
      
    //   if (!inputs.name.includes('@')) {
    //       errors.name = 'Debe ser un correo electrónico';
    //    }
       if(inputs.password === "") errors.password = "Debes ingresar un passoword"

       return errors
   }

const Form = (props) => {

    const {login, error} = props

    const [userData, setUserData] =useState({ username: '', password: '' });
    const [errors, setErrors] = useState({
        name : "",
        password : ""
    });



    const handleChange = (e) => {
            console.log(e.target.value)
            setUserData({...userData, [e.target.name] : e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(
          validate({
             ...userData,
             [e.target.name]: e.target.value,
          }))
        
          login(userData)

          setTimeout(() => {
                setErrors({
                    name : "",
                    password : ""
                })
          }, 3000);
    }
      
  return (
    <div className={styled.container}>

            <form >
                {error && ( <p className={styled.error}>{error}</p> ) }
                <h2>Login</h2>
                <div className={styled.inputBox}>
                    <label htmlFor="">Username</label>
                    <input type="text" value={userData.name} name='username' placeholder='Username' onChange={handleChange} />

                        {errors.name && <p className={styled.error}>{errors.name}</p> }        

                </div>

                <div className={styled.inputBox}>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='Password' value={userData.password} onChange={handleChange} />
                    {errors.password && <p className={styled.error}>{errors.password }</p> }       
                </div>

                <button onClick={handleSubmit} className={styled.button}  type="submit">Login</button>
            </form>

    </div>
  )
}

export default Form