import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img src='https://image.flaticon.com/icons/png/512/147/147144.png' />
         {props.message}
          <div>
          <span>Like</span>
          {props.likeCounts}
        </div>
      </div>
    </div>


  )
}
export default Post