import Header from '../../components/Header'
import './Logon.css'
import '../../index.css'
import Logoninterface from '../../components/Logon-interface'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Logon () {

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
        <div className='logon-background'>
        <Header loggedIn={loggedIn} loggedInUser={loggedInUser}/>
            <div className='div'>
                <Logoninterface/>
            </div>
        </div>
        </>
    )
}

export default Logon