import React from "react";

import s from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
         <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
         <NavLink to="/users">Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music">New</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/new">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/setting">Setting</NavLink>
        </div>
    </nav>
  )
}

export default Navbar