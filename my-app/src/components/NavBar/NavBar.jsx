import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.activ}`}>
        <a href= "/profile"> Profile</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a href= "/dialogs">Message</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a href= "/news">News</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a href= "/music">Music</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a href= "/setting">Settings</a>
      </div>
    </nav>)
}
export default NavBar