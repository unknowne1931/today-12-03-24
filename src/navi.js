import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRightLeft, faArrowLeft, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Navi = () => {

    const user = localStorage.getItem('user')

    const [hide, setHide] = useState(true);
 
    const Hide = () =>{
        setHide(true);
    }

    const Show = () =>{
        setHide(false);
    }

    const Home = () =>{
        window.location.href='/'
    }

    const Logout = () =>{
        localStorage.removeItem('ssid');
        localStorage.removeItem('user');
        window.location.reload();
    }

    const Acont = () =>{
        window.location.href='/account'
    }

  return (
    <div>

        {user &&
            <div>
                {hide ? 

                    <span className='Navi-span-hide-1' onClick={Show}><FontAwesomeIcon icon={faRightLeft} /></span>
                    :
                    <span className='Navi-span-hide' onClick={Hide}><FontAwesomeIcon icon={faRightLeft} /></span> 
                    
                }
                {hide ?
                    <div>

                    </div>
                :
                    <div>
                        <div className='Navi-cnt-01'>
                            <span className='Navi-user-name-data'>{user}</span>

                            <div className='Navi-cnt-01-sub-01'>
                                <center>
                                    <span onClick={Home}>Home</span><br/>
                                    <span onClick={Acont}>Account</span><br/>
                                    <span onClick={Logout}>Logout</span><br/>
                                </center>
                            </div>
                            <div className='Navi-cnt-01-sub-02'>
                                <span className='Navi-cnt-01-sun-02-span-01' onClick={Home}><FontAwesomeIcon icon={faHome} className='Navi-icon-style' /></span><br/>
                                <span className='Navi-cnt-01-sun-02-span-01' onClick={Acont}><FontAwesomeIcon icon={faBuildingColumns} /></span><br/>
                                <span className='Navi-cnt-01-sun-02-span-01' onClick={Logout}><FontAwesomeIcon icon={faArrowLeft} className='Navi-icon-style' /></span><br/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
    </div>
  )
}

export default Navi
