import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import './Profile.css'

function profile(){
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
        <>
        <div className="profile-background">
        <Header loggedIn={loggedIn} loggedInUser={loggedInUserName}/>
            <div className="div">
                <Profile />
            </div>
        </div>
        </>
    )
}
export default profile