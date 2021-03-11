import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Victor'}
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Sasha'},
    {id: 5, message: 'Valera'},
    {id: 6, message: 'Victor'}
]

const DialogItem = (props) => {
    let path = "/dialog/" + props.id
    return (<div className={s.dialogs + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messages.map(m => <Messages message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs