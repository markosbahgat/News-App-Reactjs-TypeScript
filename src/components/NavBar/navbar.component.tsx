import React, { HTMLProps, useState } from "react";
import './navbar.scss';

interface Props extends HTMLProps<HTMLAllCollection>{
  LogoName:string,
}

const  NavBar: React.FC<Props> = ({LogoName}: Props) => {
  const [checked, setChecked] = useState(false);
    const ShowNavbar = () => {
        var uls = document.querySelector(".links") as HTMLUListElement;
        checked ? uls.style.bottom = "100%" : uls.style.bottom = "0";
        checked ? setChecked(false) : setChecked(true);
    }
  return (
    <>
        <nav>
            <div className='navbar_logo'><strong>{LogoName}</strong></div>
                <ul className="links">
                    <li><a href="#home" className="active">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#work">work</a></li>
                    <li><a href="#contactus">contactus</a></li>
                    <li><a href="#profile"><i className="fas fa-user-circle fa-lg"></i></a></li>
                </ul>
                <div className='burger_menu'>
                    {checked ? <i className="fas fa-times fa-lg" onClick={ShowNavbar}></i> : <i className="fas fa-bars fa-lg" onClick={ShowNavbar}></i>}
                </div>
        </nav>
      </>
  )
}

export default NavBar