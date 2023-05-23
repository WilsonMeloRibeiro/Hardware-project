import './Login-interface.css'
import '../index.css'
import { useState } from 'react';
import axios from 'axios';

function Logoninterface() {
    const url = "http://localhost:3000/userVerify"
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    var verifyResponse = '';

    function handleEmailChange(newEmail){
        setEmail(newEmail)
    }
    function handlePasswordChange(newPassword){
        setPassword(newPassword)
    }
    function handleVerifyResponseChange(newVerifyResponse){
        verifyResponse = newVerifyResponse
    }

    function verify(){
        const User = {
            password: password,
            email: email
        }
        axios.post(url, User)
        .then(response=>{
            handleVerifyResponseChange(response.data)
            login()
        })
        .catch(error=> console.error(error))

    }

    function login(){
        if(verifyResponse == "User verified"){
            console.log(verifyResponse, true);
            const passwordField = document.querySelector("#password");
            const emailField = document.querySelector("#email");
            const text = document.querySelector('.text');
            emailField.style.border = " none";
            passwordField.style.border = " none";
            text.textContent = 'Você fez login :)';
        }
        else{
            const passwordField = document.querySelector("#password");
            const emailField = document.querySelector("#email");
            const text = document.querySelector('.text');
            text.textContent = 'Senha ou email incorretos';
            emailField.style.border = " solid red";
            passwordField.style.border = " solid red";
        }
    }

    return(
        <div className='login-form'>
            <form className='form-login' method='POST'>
            <h1>Entrar</h1>
                <input onChange={(e)=>handleEmailChange(e.target.value)} className='login-input' placeholder='Email' type="email" name="email" id="email" />
                <input onChange={(e)=>handlePasswordChange(e.target.value)} className='login-input' placeholder='Senha' type="password" name="password" id="password" />
                <h3 className='text'></h3>
            </form>
            <div className='button-login'>
                <button className='button' onClick={verify}>Enviar</button>
            </div>
        </div>
    )
}

export default Logoninterface