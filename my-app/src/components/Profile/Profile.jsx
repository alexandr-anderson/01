import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileIfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}/>
        </div>
    )
}

export default Profile