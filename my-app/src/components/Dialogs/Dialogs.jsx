import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (state) => {

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Messages message={m.message}/>)
    let newMessageBody = state.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        state.SendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        state.NewMessageChange(body)
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