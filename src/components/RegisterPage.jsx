import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    
    const HandleChange = (e) => {
        if (e.target.name == "username") {
            setUserName(e.target.value)
            // console.log(userName);
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value)
            // console.log(email);
        }
        else if (e.target.name == "password") {
            setPassword(e.target.value)
            // console.log(password);
        }
        else if (e.target.name == "passwordR") {
            setRepeatPassword(e.target.value)
            // console.log(repeatPassword);
        }
    }

    const validate = () => {
        const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        const RegexPassword = /^(?=.*[!@#$%^&*()_+`~\-=[\]{};':"\\|,.<>/?]).{10,}$/

        const errors = {}

        if (userName == "") {
            errors.userName = ' *Name is Required'
        }
        if (email == "") {
            errors.email = ' *Email is Required'
        }
        else if (!RegexEmail.test(email)) {
            errors.email = ' *Please enter a valid email'
        }
        if (password == "") {
            errors.password = " *Password is required"
        }
        else if (!RegexPassword.test(password)) {
            errors.password = ' *Password should be at least 10 characters long and contain at least one special character'
        }
        if (repeatPassword == '') {
            errors.passwordR = ' *Password is Required'
        }
        else if (password !== repeatPassword) {
            errors.passwordR = " *Password do not match"
        }

        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const errors = validate()
        setFormErrors(errors)
        if (Object.keys(errors).length === 0) {
            setIsSubmit(true)
            console.log(userName, email, password, repeatPassword);
            alert('Registrartion Sucessful')
            
            
            window.location.href = "/";
        }
    }

    if (isSubmit){
        useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0) {
                console.log("registration Sucess");
            }
        }, [formErrors])
    }
 
    return (
        <div className='main-register'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <p className='RegistrationFormHeading'>Registration Form</p>
                </div>

                <div>
                    <input type="text" placeholder='Your Name' name='username' onChange={(e) => HandleChange(e)} className='input-register' />
                    <p className='errors'>{formErrors.userName}</p>
                </div>
                <div>
                    <input type="text" placeholder='Your Email' name='email' onChange={(e) => HandleChange(e)} className='input-register' />
                    <p className='errors'>{formErrors.email}</p>
                </div>
                <div>
                    <input type="password" placeholder='Create Password' name='password' onChange={(e) => HandleChange(e)} className='input-register' />
                    <p className='errors'>{formErrors.password}</p>
                </div>
                <div>
                    <input type="password" placeholder='Repeat Password' name='passwordR' onChange={(e) => HandleChange(e)} className='input-register' />
                    <p className='errors'>{formErrors.passwordR}</p>
                </div>
                <div>
                    <button type="submit" className='submit-btn'>Sign up</button>
                </div>
                <h3>Already have an Account? <Link to='/'>Click Here</Link></h3>
            </form>
        </div>
    )
}

export default RegisterPage