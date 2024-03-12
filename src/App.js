import React, { useEffect, useState,createContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Play from './Play';
import "./App.css"
import Question from './question';
import Claimform from './claimform';
import Adminlog from './Adminlog';
import axios from 'axios';
import Updateques from './updateques';
import Qustview from './qustview';
import Monitor from './Monitor';
import Login from './login';
import Home from './home';
import Signup from './signup';
import Navi from './navi';
import Acount from './acount';
import SelPage from './sel';


export const user = createContext();

const App = () => {

  const [email, setEmail] = useState([])
  const token = localStorage.getItem("token");
  const id = localStorage.getItem('ssid');
  const username = localStorage.getItem('user');

  const [ipad, setIpad] = useState([])
  useEffect(()=>{
    fetch("https://ipapi.co/json")
        .then(res => res.json())
        .then(ipadr => setIpad(ipadr))
        localStorage.setItem("jki",ipad.ip)

    if(token != null){
      axios.post("https://stawro.xyz/verify/token",{token})
    .then(res=>{
      if(res.data.Status === "OK"){
        setEmail(res.data.decode.email)
        localStorage.setItem("email",res.data.decode.email)
      }else{
        localStorage.removeItem("token")
        localStorage.removeItem("item");
        localStorage.removeItem("email");
      }
    })
    }

    if(id != null){
      axios.post('https://stawro.xyz/verify/login/user',{id, username})
      .then(res =>{
        if(res.data.Status === "OK"){
          localStorage.setItem('ssid', res.data.user._id);
          localStorage.setItem('user' ,res.data.user.username);
        }else{
          localStorage.removeItem('ssid');
          localStorage.removeItem('user');
          window.location.reload();
        }
      })
    }

  },[])
  return (
    <div>
      <center>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={id ? <Play/> : <Home />}/>
            <Route path='/play' element={<Question/>}/>
            <Route path='/form' element={<Claimform/>}/>
            <Route path='/login' element={token ? <Updateques /> : <Adminlog/>}/>
            <Route path='/add' element={token ? <Updateques/> : <Play/>} />
            <Route path='/view' element={token ? <Qustview/> : <Play/>} />
            <Route path='/monit' element={token ? <Monitor /> : <Play />} />
            <Route path='/user' element={id ? <Play /> : <Login />} />
            <Route path='/signup' element={id ? <Play /> : <Signup />} />
            <Route path='/account' element={id ? <Acount /> : <Login />} />
            <Route path='/game' element={id ? <SelPage/> : <Login/> } />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}

export default App
