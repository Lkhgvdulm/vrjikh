import React, { useState } from "react";
import "./header.css"
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import Logo from "../../../assets/images/logo.jpg";

const Header = () => {
    const [Mobile, setMobile] = useState(false)
    return(
        <nav className="navbar">
                <h3 className="logo">
                    <img src={Logo} alt="asdfghj"></img>
                </h3>
                <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/'><li>НҮҮР</li></Link>
                    <Link to='/bidnii_tuhai'><li>БИДНИЙ ТУХАЙ</li></Link>
                    <Link to='/hunii_nuuts'><li>ХҮНИЙ НӨӨЦ</li></Link>
                    <Link to='/medee_medeelel'><li>МЭДЭЭ, МЭДЭЭЛЭЛ</li></Link>
                    <Link to='/holboo_barih'><li>ХОЛБОО БАРИХ</li></Link>
                </ul>
                <button className="menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross/> : <FaBars/> }
                </button>
        </nav>
    )
}
export default Header