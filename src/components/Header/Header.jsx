import React from "react";

import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" alt="" />

        <div className={s.loginBlock}>
          {props.isAuth 
          ? <div className="">{props.login} - <button onClick={props.logout}>Log out</button></div>  
          : <NavLink to={'/login'}>Login</NavLink> }
          
        </div>
    </header>
  )
}

export default Header