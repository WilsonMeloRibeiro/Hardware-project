import './Logon-interface.css'
import '../index.css'
import { useState } from 'react'
import axios from 'axios';


function Logoninterface() {
    const url = "http://localhost:3000"
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [email, setEmail] = useState('');

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

    function verify(){
        if(password == passwordVerify){
            return true
        }else{
            return false   
        }
    }

    function send(){
        if(verify() == true){
            const newUser = {
                name: name,
                password: password,
                email: email
            }
            axios.post(url, newUser)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=> console.error(error))
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
                <input onChange={(e)=>handlePasswordChange(e.target.value)} className='logon-input' placeholder='Senha' type="password" name="password" id="password" />
                <input onChange={(e)=>handlePasswordVerifyChange(e.target.value)} className='logon-input' placeholder='Repita a senha' type="password" name="password2" id="password2" />
                <p className='text'></p>
            </form>
            <div className='button-logon'>
                <button className='button' onClick={send}>Enviar</button>
            </div>
        </div>
    )
}

export default Logoninterface