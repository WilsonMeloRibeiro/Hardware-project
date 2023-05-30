import axios from "axios";
import { useState, useEffect } from "react";
import './Profile.css'

function Profile(){
    axios.defaults.withCredentials = true;
    const [loggedInUserName, setLoggedInUserName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:3000/userVerify').then(async (response)=>{
            console.log(response.data.loggedIn)
            if(response.data.loggedIn){
                setLoggedInUserName( response.data.user.name)
                setLoggedInUserEmail( response.data.user.email)
                setLoggedIn(response.data.loggedIn)
            }else{
                return window.location.replace('http://localhost:5173/')
            }
        })
    }, [])

    return(
        <div className='info-background'>
            <ul className='profile-info'>
                <li>
                    <h1>Nome</h1>
                    <p>{loggedInUserName}</p>
                </li>
                <li>
                <h1>Email</h1>
                    <p>{loggedInUserEmail}</p>
                </li>
            </ul>
        </div>
    )
}
export default Profile