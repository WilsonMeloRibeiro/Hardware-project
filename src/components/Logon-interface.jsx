import './Logon-interface.css'
import '../index.css'
import { useEffect, useState } from 'react'
import axios from 'axios';


function Logoninterface() {
    const url = "http://localhost:3000"
    const urlVerifyer = "http://localhost:3000/email"
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    var verifyResponse = 'a';
    
    axios.defaults.withCredentials = true;

    function handleNameChange(newName){
        setName(newName)
    }
    function handleEmailChange(newEmail){
        setEmail(newEmail)
    }
    function handlePasswordChange(newPassword){
        setPassword(newPassword)
    }
    function handlePasswordVerifyChange(newPasswordVerify){
        setPasswordVerify(newPasswordVerify)
    }

    

    function verifyPassword(){
        if(password == passwordVerify){
            return true
        }else{
            return false   
        }
    }

    function emailVerify(){
        if(verifyResponse == "Email does not exist"){
            return true
        }else{
            return false
        }
    }

    function emailResponse(){
        const emailVerify = {
            email: email
        }
        axios.post(urlVerifyer, emailVerify)
        .then(response=>{
            console.log("a")
            verifyResponse = response.data;
            send()
        })
        .catch(error=> console.error(error))
    }

    function send(){
        if(verifyPassword() == true){
            if(emailVerify() == true){
                var newUser = {
                    name: name,
                    plainPassword: password,
                    email: email
                }
                axios.post(url, newUser)
                .then(response=> console.log(response.data))
                .catch(error=> console.error(error))
            }else{
                const emailVerifyField = document.querySelector("#email");
                const text = document.querySelector('.text');
                text.textContent = 'Email já está em uso';
                emailVerifyField.style.border = " solid red";
            }
        }else{
            const passwordVerifyField = document.querySelector("#password2");
            const text = document.querySelector('.text');
            text.textContent = 'Senha incorreta';
            passwordVerifyField.style.border = " solid red";
        }
    }

    return(
        <div className='logon-form'>
            <form className='form-logon' autoComplete='off'>
            <h1>Registre-se</h1>
                <input onChange={(e)=>handleNameChange(e.target.value)} className='logon-input' placeholder='Nome' type="text" name="name" id="name" />
                <input onChange={(e)=>handleEmailChange(e.target.value)} className='logon-input' placeholder='Email' type="email" name="email" id="email" />
                <input onChange={(e)=>handlePasswordChange(e.target.value)} className='logon-input' placeholder='Senha' type="password" name="plainPassword" id="plainPassword" />
                <input onChange={(e)=>handlePasswordVerifyChange(e.target.value)} className='logon-input' placeholder='Repita a senha' type="password" name="password2" id="password2" />
                <p className='text'></p>
            </form>
            <div className='button-logon'>
                <button className='button' onClick={emailResponse}>Enviar</button>
            {loggedIn && <h1>{loggedInUser}</h1>}
            </div>

        </div>
    )
}

export default Logoninterface