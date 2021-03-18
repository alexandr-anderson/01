import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Messages message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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