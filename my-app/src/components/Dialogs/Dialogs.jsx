import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {dialogsData, messages} from "../../index";


let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messages.map(m => <Messages message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs