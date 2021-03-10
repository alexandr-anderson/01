import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className='big' src='https://i1.sndcdn.com/visuals-000020946955-1oz9aH-t1240x260.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>)
}
export default ProfileInfo