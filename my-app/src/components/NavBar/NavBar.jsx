import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/profile" activeClassName={style.activeLink}> Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Message</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/setting" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </nav>)
}
export default NavBar