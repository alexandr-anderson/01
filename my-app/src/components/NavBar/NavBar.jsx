import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.activ}`}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a>Message</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a>News</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a>Music</a>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <a>Settings</a>
      </div>
    </nav>)
}
export default NavBar