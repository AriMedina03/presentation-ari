import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { HiFingerPrint } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Navbar.css'   

function Navbar() {
    const [click, setClick] = useState(false);
    const [botton, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(() => { 
        //esto le da logica para que el boton no aparezca en pantallas pequeñas
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
   <>
   <nav className="navbar"> 
    <div className="navbar-container"> 
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ARIADNA MEDINA <HiFingerPrint size={28} className="navbar-icon" />
            
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/VantTec' className="nav-links" onClick={closeMobileMenu}>
                    VantTec
                    {/* services */}
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/SAIRS' className="nav-links" onClick={closeMobileMenu}>
                    SAIRS
                    {/* products */}
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/School' className="nav-links" onClick={closeMobileMenu}>
                    School projects
                    {/* sign-up */}
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/Hobbies' className="nav-links" onClick={closeMobileMenu}>
                    About me
                    {/* sign-up */}
                </Link>
            </li>
            
        </ul>
        {botton && (
            <div className="navbar-socials">
                <a 
                    href="https://github.com/AriMedina03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="navbar-social"
                    aria-label="GitHub"
                >
                    <FaGithub size={26} />
                    <span>GitHub</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/ariadna-medina/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="navbar-social"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={26} />
                    <span>LinkedIn</span>
                </a>
                <a 
                    href="mailto:arimedina.090@gmail.com" 
                    className="navbar-social"
                    aria-label="Email"
                >
                    <FaEnvelope size={26} />
                    <span>Email</span>
                </a>
            </div>
        )}
    </div> 
   </nav>
   </>
  )
}

export default Navbar
