import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Question = () => {

  const username = localStorage.getItem('user');
  const qno = localStorage.getItem('qno');
  const noq = localStorage.getItem('noq');

  const [data, setData] = useState([]);
  const Qno = localStorage.getItem("qno");
  const [verrii, setVerrii] = useState([]);
  const [lock, setLock] = useState([]);
  const [ipad, setIpad] = useState([]);
  const [upii1 , setUpii1] = useState([]);
    const [upii2 , setUpii2] = useState([]);
    const [val, setVal] = useState([]);

    const resetTimer = () => {
      setRunning(false);
      setSeconds(11);
      localStorage.setItem('remainingSeconds', 11);
    };


    const initialSeconds = parseInt(localStorage.getItem('remainingSeconds'), 10) || 11;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(false);

    const startTimer = () => {
      setRunning(true);
    };

    useEffect(() => {
      startTimer()
      //timer
  
      let intervalId;

      if (running && seconds > 0) {
        intervalId = setInterval(() => {
          setSeconds((prevSeconds) => {
            const newSeconds = prevSeconds - 1;
            localStorage.setItem('remainingSeconds', newSeconds);
            return newSeconds;
          });
        }, 1000); // Update the timer every 1000ms (1 second)
      }
      return () => {
        clearInterval(intervalId);
      };
      //timer
    }, [running, seconds])
  
  
  
  
    localStorage.setItem('countdownSeconds', seconds.toString());
  
  
    if(seconds === 0){
      axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Time Out")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
    }else if(seconds > 11){
      axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Time Out")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
    }

  
    ///ti

  useEffect(()=>{
    axios.post("https://https://stawro.xyz/verify/account/key",{username})
    .then(res =>{
      if(res.data.Status === "OK"){
        setLock(res.data.user);
      }
    })

        fetch(`https://https://stawro.xyz/question/singel/verify/data/01/${username}`)
        .then(res => res.json())
        .then(data => setVerrii(data))

    if(qno !== null){
      fetch(`https://https://stawro.xyz/question/singel/01/${qno}`)
      .then(res => res.json())
      .then(data => setData(data));
    }
    fetch(`https://https://stawro.xyz/question/singel/verify/data/01/sakhd/sjkh/dsf/dfsd/${username}`)
    .then(res => res.json())
    .then(data => setUpii1(data))

    fetch(`https://https://stawro.xyz/question/singel/verify/data/01/sakhd/${username}`)
    .then(res => res.json())
    .then(data => setUpii2(data))

  },[])


  const Button1 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "A"
    axios.post("https://https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
    .then(res =>{
      if(res.data.Status === "OK"){
        window.location.href='/game'
 
      }else if(res.data.Status === "OKK"){
        localStorage.setItem('72bacsc', res.data.user2.username);
        window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
      }
      else{
        
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  const Button2 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "B"
    axios.post("https://https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
    .then(res =>{
      if(res.data.Status === "OK"){
        window.location.href='/game'
      }else if(res.data.Status === "OKK"){
        localStorage.setItem('72bacsc', res.data.user2.username);
        window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
      }
      else{
        
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  const Button3 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "C"
    axios.post("https://https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
    .then(res =>{
      if(res.data.Status === "OK"){
        window.location.href='/game'
      }else if(res.data.Status === "OKK"){
        localStorage.setItem('72bacsc', res.data.user2.username);
        window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
      }
      else{
        
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }



  const Button4 = () =>{
    resetTimer();
    localStorage.setItem('remainingSeconds', 11);
    const Option  = "D"
    axios.post("https://https://stawro.xyz/answer/check/question/correct/or/wrong",{Option, noq, Qno, username})
    .then(res =>{
      if(res.data.Status === "OK"){
        window.location.href='/game'
      }else if(res.data.Status === "OKK"){
        localStorage.setItem('72bacsc', res.data.user2.username);
        window.location.href=`/game?one=${upii1._id}&two=${upii2._id}`
      }
      else{
        
        axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/${upii1._id}`)
        .then(res =>{
          if(res.data.Status === "OK"){
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                alert("Wrong Answer, Better luck next Time")
                window.location.href='/'
              }else{
                window.location.href='/'
              }
            })
          }else{
            axios.delete(`https://stawro.xyz/delete/data/api/dont/know/ada/upi/one/exts/${upii2._id}`)
            .then(res =>{
              if(res.data.Status === "OK"){
                window.location.href='/'   
              }else{
                window.location.href='/'
              }
            })
          }
        })
        
      }
    })
  }

  return (
    <div>
      {verrii.username
      ?
      <center>
        <span>Not Found Username</span>
      </center>
      :
      <div>
        <center>
        <div className='question-div-01'>
            <span className='question-div-01-span-01'>Seconds : <span className='question-div-01-span-01-span-01'>{seconds}</span></span><span></span>
            <div className='question-div-02'>
                <span className='question-div-02-span-01'>{data.question}</span><br />

                {data.img !== "" &&
                  <div className='question-div-cnt-04'>
                    <img src={data.img}/>
                  </div>
                }
                
                {lock.username ?
                <div>
                  <span>After Payment, The new Game Begins</span>
                </div>
                :
                <div className='question-div-03'>
                  <button onClick={Button1}>{data.optionA}</button> <button onClick={Button2}>{data.optionB}</button><br />
                  <button onClick={Button3}>{data.optionC}</button> <button onClick={Button4}>{data.optionD}</button>
                </div>
                
                }
            </div>
        </div>
        </center>
      </div>
        }
    </div>
  )
}

export default Question;