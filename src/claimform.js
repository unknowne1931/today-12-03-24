import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Claimform = () => {

    const username = localStorage.getItem('user');
    const vald = localStorage.getItem('72bacsc')

    const [name , setName] = useState([]);
    const [upi , setUPI] = useState([]);
    const [veri, setVeri] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{

        fetch(`https://stawro.xyz/question/singel/verify/data/01/${username}`)
        .then(res => res.json())
        .then(data => setVeri(data))

        const key = process.env.REACT_APP_API_KEY
        fetch(`https://stawro.xyz/get/accountdata01/by/${username}?key=${key}`)
        .then(res => res.json())
        .then(data => setData(data))

    },[])


    const Nameup = (e) =>{
        setName(e.target.value);
    }

    const UPIup = (e) =>{
        setUPI(e.target.value);
    }

    const Post = (e) =>{
        e.preventDefault();
        const username = data.username
        const upi = data.upi
        const name = data.name
        axios.post("https://stawro.xyz/account/data/post/get",{username, upi,name})
        .then(res =>{
            if(res.data.Status === "OK"){
                axios.delete(`https://stawro.xyz/delete/data/api/dont/know/${veri._id}`)
                .then(res =>{
                    if(res.data.Status === "OK"){
                        localStorage.removeItem("jki")
                        localStorage.removeItem("Qno");
                        alert("Within 5 min, Amount will credit to you'r Account, Please Follow us on Instagram 'staWro', for More Updates")
                        window.location.href='/'
                    }
                })
            }else{
                alert("Retry Again")
            }
        })
    }

    const Edtcl = () =>{
        window.location.href='/account?value=dsefgds'
    }

    const Hmee = () =>{
        window.location.href='/'
    }


  return (
    <div>
      <center>
        <h1 className='form-h1-wish'>You Won Claim Reward Now</h1><br/>
        <span className='form-claim-my-be-01'>Check your's Payment Data</span><br />
        <div className='claim-form-in-put-buton-cnt-01'><br/>
            <span className='form-data-pay'>Name : <strong>{data.name}</strong></span><br/>
            <span className='form-data-pay'>UPI / Phone pay : <strong>{data.upi}</strong></span>
            <div>
                {veri._id ?

                    <div>
                        {data._id ?
                            <div><button onClick={Edtcl} className='claim-payment-btn-01' >Edit</button><button onClick={Post} className='claim-payment-btn-02'>ok</button></div>
                            :
                            <div><button onClick={Edtcl} className='claim-payment-btn-03'>add</button></div>
                        }
                    </div>

                    :
                    <div>
                        <button onClick={Hmee} className='claim-payment-btn-01'>Home</button>
                    </div>
                    
                }
            </div>
        </div>
      </center>
    </div>
  )
}

export default Claimform
