import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages message={m.message}/>)
    let newMessageBody = props.newMessageBody

    let onSendMessageClick = () => {
        props.SendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.NewMessageChange(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.messageWindow}>
                <div>
                    <h4>New message</h4>
                    <textarea placeholder='Enter your message'
                              onChange={onNewMessageChange}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs