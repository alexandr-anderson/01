import React from 'react';
import style from './../Dialogs.module.css';



const Messages = (props) => {
    return (
        <div className={style.messages}>{props.message}</div>
    )
}

export default Messages