import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Mail, WhatsApp, AddLocation } from '@mui/icons-material'

import Companies from './Companies';
const NavBar = () => {
    const [show, setShow] = useState(false);
  function toggle(){
        if(show)
        {
            setShow(false)
        }
        else{
            setShow(true);
        }
    }
    return (
        <>
            <div className="header-nav-area">
                <div className="img-logo">
                    <img src="images/images.jpg" alt="logo" />
                </div>
                <div className="members-area">
                    <Link to="#"> <Mail /> bscs1413@gmail.com</Link>
                    <Link to="#"> <WhatsApp />+923445500987</Link>
                </div>

            </div>
            <div className="main-div">
                <ul>
                    <li className="active"><Link to="/">Main</Link></li>
                    <li><Link to="#" onClick={()=>toggle()}>Companies</Link></li>
                    <li> <Link to="/Yarn">Yarn</Link></li>
                    <li><Link to="#">Count Checker</Link></li>
                    <li> <Link to="/Contact">Contact Us</Link></li>
                </ul>
            </div>
            {
                show === false ? null :<Companies />

            }
            





        </>
    )
}

export default NavBar
