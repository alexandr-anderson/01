import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src='https://image.flaticon.com/icons/png/512/147/147144.png'/>
                {props.message}
                <div>
                    <span>Like </span>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}
export default Post