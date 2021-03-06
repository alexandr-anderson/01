import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <img className='big' src='https://i1.sndcdn.com/visuals-000020946955-1oz9aH-t1240x260.jpg'/>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>)
}
export default Profile