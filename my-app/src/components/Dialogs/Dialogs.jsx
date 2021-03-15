import React from 'react';
import style from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Messages message={m.message}/>)

    let newDialogsElement = React.createRef;

    let SentMessage = () => {
        let text = newDialogsElement.current.value;
        alert(text)
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
                <textarea ref={newDialogsElement}/>
                </div>
                <div>
                <button onClick={SentMessage}>Sent Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs