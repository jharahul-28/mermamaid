import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

function Footer() {
  return (
    <div className='foot'>
        <div className="fl">
            <FaPhoneAlt/>
            Toll free <strong>1800 200 1234</strong>
        </div>
        <div className="fc">
            <FaFacebook/> www.facebook.com/criumps
        </div>
        <div className="fr">
            <IoIosGlobe/> www.crigroups.com
        </div>
    </div>
  )
}

export default Footer