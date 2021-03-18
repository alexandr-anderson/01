import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messages message={m.message}/>)
    let newDialogsElement = React.createRef;
    let sentMessage = () => {
        props.dispatch(sentMessageActionCreator())
    }

    let onMessageChange = () => {
        debugger
        let text = newDialogsElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
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
                    <textarea onChange={onMessageChange} ref={newDialogsElement} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={sentMessage}>Sent Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs