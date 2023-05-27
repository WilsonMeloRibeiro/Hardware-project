import './Login.css'
import '../../components/login-interface'
import Header from '../../components/Header'
import Logoninterface from '../../components/login-interface'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Login(){
    const [loggedInUser, setLoggedInUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:3000/userVerify').then(async (response)=>{
            if(response.data.loggedIn == true){
                setLoggedInUser( response.data.user.name)
                setLoggedIn(response.data.loggedIn)
            }else{
                console.log("not logged in");
            }
        })
    }, [])

    return(
        <>
        <div className='login-background'>
        <Header loggedIn={loggedIn} loggedInUser={loggedInUser}/>
            <div className='login-main-div'>
            <Logoninterface/>
            </div>
        </div>
        </>
    )
}
export default Login