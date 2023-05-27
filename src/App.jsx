import './App.css'
import Header from './components/Header.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  axios.defaults.withCredentials = true;
  const [loggedInUser, setLoggedInUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
      axios.get('http://localhost:3000/userVerify').then(async (response)=>{
          if(response.data.loggedIn == true){
              setLoggedInUser(response.data.user.name)
              setLoggedIn(response.data.loggedIn)
          }else{
              console.log(loggedIn, loggedInUser)
              console.log("not logged in");
          }
      })
  }, [])

  return (
      <div>
      <Header loggedIn={loggedIn} loggedInUser={loggedInUser}/>

      </div>
  )
}

export default App
